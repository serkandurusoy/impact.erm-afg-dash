import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';

const NavigationLink = ({ children, to, exact }) => (
  <Route path={to} exact={exact}>
    {({ match }) => (
      <li
        className={classNames('navbar-nav__item', {
          active: match,
        })}
      >
        <Link className="navbar-nav__link" to={to}>
          {children}
        </Link>
      </li>
    )}
  </Route>
);

NavigationLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavigationLink.defaultProps = {
  exact: false,
};

export default NavigationLink;
