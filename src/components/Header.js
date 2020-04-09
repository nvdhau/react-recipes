import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// activeClassName from react-router-dom

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    to="/"
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">🍽 My Recipes</h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

export default Header;
