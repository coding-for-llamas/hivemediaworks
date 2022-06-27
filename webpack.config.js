require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ProvidePlugin } = require('webpack');
const webpack = require('webpack');

// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || []; // eslint-disable-line no-mixed-operators
const when = (condition, config, negativeConfig) => (condition ? ensureArray(config) : ensureArray(negativeConfig));

// primary config:
const nodeEnv = process.env.NODE_ENV || 'development';
const title = 'Hive Media Works';
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const baseUrl = '/';
const envVars = ['NODE_ENV', 'BackendUrl', 'GoogleClientId', 'userRoles', 'HashString'];
if (nodeEnv === 'development')envVars.push('PORT');

module.exports = (env) => ({
  resolve: {
    alias:{ src: srcDir },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: { // needed for jsonwebtoken
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
    },
  },

  entry: {
    app: [`${srcDir}/main.tsx`],
  },

  mode: env.production ? 'production' : 'development',

  output: {
    path: outDir,
    publicPath: baseUrl,
    filename: env.production ? '[name].[chunkhash].bundle.js' : '[name].[fullhash].bundle.js',
    chunkFilename: env.production ? '[name].[chunkhash].chunk.js' : '[name].[fullhash].chunk.js',
  },

  performance: { hints: false },

  devServer: {
    static: outDir,
    hot: true,
    historyApiFallback: { // serve index.html for all 404 (required for push-state)
      rewrites: [
        { from: /^\/$/, to: '/' },
        { from: /^\//, to: '/' },
        { from: /./, to: '/' },
      ],
    },
    port: parseInt(process.env.PORT, 10),
  },

  devtool: env.production ? 'nosources-source-map' : 'source-map',

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles', test: /\.css$/i, chunks: 'all', enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: [/node_modules/],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      // SCSS required in JS/TS files should use the style-loader that auto-injects it into the website
      // only when the issuer is a .js/.ts file, so the loaders are not applied inside html templates
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader", // compiles Sass to CSS, using dart sass
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // Still needed for some node modules that use CSS
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.html$/i, loader: 'html-loader' }, // eslint-disable-next-line no-useless-escape
      // embed small images and fonts as Data Urls and larger ones as files:
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      // load these fonts normally, as files:
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
    ],
  },

  plugins: [
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.ejs`,
      minify: env.production ? { removeComments: true, collapseWhitespace: true } : undefined,
      metadata: { title, baseUrl },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static/favicon.ico', to: 'favicon.ico' },
      ],
    }),
    new webpack.EnvironmentPlugin(envVars),
    ...when(env.analyze, new BundleAnalyzerPlugin()),
  ],
});
