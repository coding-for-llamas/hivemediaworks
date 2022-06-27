import AboutContent from './AboutContent';

export const About = (): JSX.Element => {
  document.title = 'About | Hive Media Works ';  
  return (
      <div className="Site-content">
        <main className="about-main">
          <AboutContent />
        </main>
      </div>
  );
};

export default About;
