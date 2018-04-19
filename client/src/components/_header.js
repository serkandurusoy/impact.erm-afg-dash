import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './_navigation';

const Header = ({ children, className, title, subtitle, iconClass }) => (
  <header>
    <section className={className}>
      <Navigation />

      <div className="container-fluid">
        <div className="header__title">
          {iconClass && <span className={`header__icon icon ${iconClass}`} />}
          {title}
        </div>
        <div className="header__subtitle">{subtitle}</div>
        {children}
      </div>
    </section>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  iconClass: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  className: 'header--homepage',
  title: 'Afghanistan',
  subtitle: 'Emergency Response Mechanism (ERM) Dashboard',
  iconClass: null,
};

export default Header;
