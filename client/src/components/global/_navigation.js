import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from '@impact/prototype/dist/images/logo.png';
import NavigationLink from './_navigation-link';

class Navigation extends Component {
  state = {
    navigationSearchActive: false,
    showMobileMenu: false,
  };

  toggleSearch = e => {
    e.preventDefault();
    this.setState({
      navigationSearchActive: !this.state.navigationSearchActive,
    });
  };

  toggleMobileMenu = e => {
    e.preventDefault();
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    });
  };

  render() {
    const { navigationSearchActive, showMobileMenu } = this.state;
    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          <img className="img-fluid" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleMobileMenu}
        >
          <span className="icon icon--menu-toggle" />
          <span className="text">Menu</span>
        </button>
        <div
          className={classNames('navbar-collapse', {
            show: showMobileMenu,
          })}
          id="navbarCollapse"
        >
          <ul className="navbar-nav">
            <NavigationLink to="/" exact>
              Home
            </NavigationLink>
            <NavigationLink to="/provinces">Provinces</NavigationLink>
            <NavigationLink to="/heat">HEAT</NavigationLink>
            <NavigationLink to="/mpc">MPC</NavigationLink>
            <NavigationLink to="/pdm">PDM</NavigationLink>
            <NavigationLink to="/contact">Contact</NavigationLink>
            <li
              className={classNames('navbar-nav__item', 'nav-search', {
                active: navigationSearchActive,
              })}
            >
              <a
                onClick={this.toggleSearch}
                className="navbar-nav__link nav-search__link"
              >
                <span className="icon icon--search" />
                <span className="nav-search__link-text">Search</span>
              </a>
              <div className="dropdown-menu nav-search__form">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
