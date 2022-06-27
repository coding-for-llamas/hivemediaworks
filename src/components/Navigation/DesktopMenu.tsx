import { NavLink } from 'react-router-dom';

export const DesktopMenu = (): JSX.Element => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-nav">
          <li className="nav-item"><NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link">Our Services</NavLink></li>
          <li className="nav-item"><NavLink to="/work" className="nav-link">Current Clients</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopMenu;