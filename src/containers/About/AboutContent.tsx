const AboutContent = (): JSX.Element => (
  <>
    <div className="about-header">
      <h1 className="lg-heading">
        About
        {' '}
        <span className="text-secondary">Us</span>
      </h1>
      <h2 className="sm-heading">Lorem ipsum dolor sit amet.</h2>
    </div>
    <div className="about-info">
      <div className="about-intro">
        {/* <img className="about-picture" 
        src="https://dl.dropboxusercontent.com/s/p8q5diyni6deo6h/HMW_Logo.png?dl=0" alt="Hive Media Works Logo" /> */}
        <div className="about-text">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Deserunt ex, sed mollitia voluptas aperiam atque nemo nobis deleniti quasi! Porro cum unde sint sunt similique.</p>
        </div>
      </div>
      <div className="about-proficiency">
        <div className="about-proficiency--box-1">
          <h3 className="underline">Services</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Autem officiis ratione dolorum minima.</p>
            <p>Dolor corporis commodi optio aliquam.</p>
            <p>Assumenda minima iure qui mollitia.</p>
            <p>Porro esse ullam laudantium incidunt.</p>
        </div>
        <div className="about-proficiency--box-2">
          <h3 className="underline">Services 2</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Iste mollitia id repellat non!</p>
            <p>Dolorum dolor cumque quisquam reprehenderit.</p>
            <p>Quidem ipsam iure explicabo laborum.</p>
        </div>
        <div className="about-proficiency--box-3">
          <h3 className="underline">Services 3</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Eligendi facere ex odio deserunt.</p>
          <p>Aperiam numquam aliquid autem quasi.</p>
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;