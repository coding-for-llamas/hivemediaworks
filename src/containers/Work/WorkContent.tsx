const WorkContent = (): JSX.Element => (
  <>
    <div className="work-header">
      <h1 className="lg-heading">
        My
        {' '}
        <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">
        Some of the projects I've worked on.
      </h2>
    </div>
    <div className="work-projects">
      <div className="work-projects--item">
        <div className="site">
          <a className="nav_link" href="/daycare"><img src="https://www.dl.dropboxusercontent.com/s/c9mxoixh5sqnict/project1.png?dl=0" 
          alt="Screenshot of a daycare website." /></a>
          <a href="/daycare" className="btn btn-light" target="_blank" rel="noreferrer">
            Daycare
          </a>
          <a href="https://github.com/coding-for-llamas/caring-child-daycare" className="btn btn-dark" target="_blank" rel="noreferrer">
          <i className="" />
            &nbsp;
            Github
          </a>
        </div>
      </div>
    </div>
  </>
);

export default WorkContent;