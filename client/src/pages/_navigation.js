import React, { Component } from 'react';
import classNames from 'classnames';
import logo from '@impact/prototype/dist/images/logo.png';

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
        <a className="logo" href="">
          <img className="img-fluid" src={logo} alt="Home" />
        </a>
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
            <li className="navbar-nav__item active">
              <a className="navbar-nav__link" href="">
                Home
              </a>
            </li>
            <li className="navbar-nav__item">
              <a className="navbar-nav__link" href="">
                Provinces
              </a>
            </li>
            <li className="navbar-nav__item">
              <a className="navbar-nav__link" href="">
                HEAT
              </a>
            </li>
            <li className="navbar-nav__item">
              <a className="navbar-nav__link" href="">
                MPC
              </a>
            </li>
            <li className="navbar-nav__item">
              <a className="navbar-nav__link" href="">
                PDM
              </a>
            </li>
            <li className="navbar-nav__item">
              <a className="navbar-nav__link" href="">
                Contact
              </a>
            </li>
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
