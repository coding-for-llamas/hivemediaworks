const AboutContent = (): JSX.Element => (
  <>
    <div className="about-header">
      <h1 className="lg-heading">
        About
        {' '}
        <span className="text-secondary">Us</span>
      </h1>
      <h2 className="sm-heading">Your time is precious, we can save you some.</h2>
    </div>
    <div className="about-info">
      <div className="about-intro">
        <div className="about-text">
          <h2>Here at the Hive, we know <span className="text-secondary">deadlines</span> matter.</h2>
          <br />
          <p>We'll go to work to keep you from feeling the sting of corporate crunch.
            We strive to provide time saving custom solutions and services to independent artists and creators. 
            Come join our hive 
            <span className="text-secondary"> <b>today</b></span>
            </p>
        </div>
      </div>
      <div className="about-proficiency">
        <div className="about-proficiency--box-1">
          <h3 className="underline">Customer Support</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Autem officiis ratione dolorum minima.</p>
            <p>Dolor corporis commodi optio aliquam.</p>
            <p>Assumenda minima iure qui mollitia.</p>
            <p>Porro esse ullam laudantium incidunt.</p>
        </div>
        <div className="about-proficiency--box-2">
          <h3 className="underline">Sales Coordination</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Iste mollitia id repellat non!</p>
            <p>Dolorum dolor cumque quisquam reprehenderit.</p>
            <p>Quidem ipsam iure explicabo laborum.</p>
        </div>
        <div className="about-proficiency--box-3">
          <h3 className="underline">Record Keeping</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Eligendi facere ex odio deserunt.</p>
          <p>Aperiam numquam aliquid autem quasi.</p>
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;