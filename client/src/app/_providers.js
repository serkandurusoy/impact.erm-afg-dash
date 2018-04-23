import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const Providers = ({ children }) => <Router>{children}</Router>;

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
