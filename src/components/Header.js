import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
      <div className="header__picture">
      </div>
    </div>
  </header>
);

export default Header;