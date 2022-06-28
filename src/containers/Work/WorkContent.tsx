import { gallery } from './gallery';

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
      {gallery.map((gal) => (
        <div className="work-projects--item">
          <div className="gallery">
            <h2 className="gallery-header">{gal.name}</h2>
            <img className="gallery-image" key={gal.name} src={gal.url} alt={gal.alt} />
            <p>{gal.description}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default WorkContent;