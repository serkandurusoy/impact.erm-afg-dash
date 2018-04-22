import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './_navigation';

const Header = ({ children, className, title, subTitle, iconClass }) => (
  <header>
    <section className={className}>
      <Navigation />

      <div className="container-fluid">
        <div className="header__title">
          {iconClass && <span className={`header__icon icon ${iconClass}`} />}
          {title}
        </div>
        <div className="header__subtitle">{subTitle}</div>
        {children}
      </div>
    </section>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  iconClass: null,
};

export default Header;
