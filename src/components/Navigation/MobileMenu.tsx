import { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const MobileNav = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar dark>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <ul className="menu-nav">
            <li className="nav-item"><NavLink to="/" exact activeClassName="active" tag={RRNavLink} onClick={toggleNavbar}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about" tag={RRNavLink} onClick={toggleNavbar}>Our Services</NavLink></li>
            <li className="nav-item"><NavLink to="/work" tag={RRNavLink} onClick={toggleNavbar}>Current Clients</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" tag={RRNavLink} onClick={toggleNavbar}>Contact</NavLink></li>
          </ul>
        </Collapse>
      </Navbar>
    </>
  );
};

export default MobileNav;