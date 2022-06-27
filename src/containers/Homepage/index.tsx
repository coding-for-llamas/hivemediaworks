import HomeContent from './HomepageContent';

export const Homepage = (): JSX.Element => {
  document.title = 'Hive Media Works';  
  return (
      <div className="Site-content">
        <main className="home-main">
          <HomeContent />
        </main>
      </div>
  );
};

export default Homepage;
