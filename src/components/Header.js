import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../static/images/logo.png';

// activeClassName from react-router-dom

const HeaderLink = ({ children, ...props }) => {
  // ...props: paste all props of parent to child
  console.log(props);

  return (
    <NavLink
      exact
      className="p1 mx2 black rounded text-decoration-none"
      activeClassName="bg-white"
      {...props} // is to="/" for Home
    >
      {children}
    </NavLink>
  );
};

HeaderLink.propTypes = {
  children: PropTypes.node,
};

const Header = () => (
  <header className="flex items-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">🍽 My Recipes</h1>
      <span className="mr1">by</span>
      <img src={Logo} alt="Logo" style={{ width: 30 }} />
    </div>
    <nav>
      {/* Home is children "/" is props */}
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
      {/* Example NavLink, activeClassName applies when path is matched
      <NavLink
        exact
        to="/"
        className="p1 mx2 black rounded text-decoration-none"
        activeClassName="bg-white"
      >
        Home
      </NavLink> */}
    </nav>
  </header>
);

export default Header;
