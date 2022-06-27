const WorkContent = (): JSX.Element => (
  <>
    <div className="work-header">
      <h1 className="lg-heading">
        Our Current
        {' '}
        <span className="text-secondary">Projects</span>
      </h1>
      <h2 className="sm-heading">
        An example of some of our current client's works.
      </h2>
    </div>
    <div className="work-projects">
      <div className="work-projects--item">
        {/*TODO: Setup grid box with JSON file that loops over data to populate some images/descriptions 
        for current clients. Maybe setup pages for each specific one? */}
        <div className="site">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Iusto dolore inventore consectetur error?</p>
          <p>Numquam quidem maiores in saepe?</p>
        </div>
      </div>
    </div>
  </>
);

export default WorkContent;