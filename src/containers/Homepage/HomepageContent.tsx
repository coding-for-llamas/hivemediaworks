const background = 'https://www.dl.dropboxusercontent.com/s/9024lrtybjgx01f/background.jpg?dl=0';

const HomeContent = (): JSX.Element => (
  <>
      <img src={background} alt="Laptop" className="bg" />
      <div className="home-header">
        <h1 className="lg-heading">
          Hive Media
          {' '}
          <span className="text-secondary">Works</span>
        </h1>
        <h2 className="sm-heading">
          Lorem ipsum dolor sit amet.
        </h2>
        <div className="icons">
          <a href="https://twitter.com/hivemediaworks" aria-label="Twitter Page">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="https://www.facebook.com/hivemediaworks" aria-label="Facebook Page">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="https://www.linkedin.com/in/hivemediaworks" aria-label="LinkedIn Page">
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </div>
      </div>
  </>
);

export default HomeContent;
