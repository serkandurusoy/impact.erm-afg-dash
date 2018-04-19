import React from 'react';
import PropTypes from 'prop-types';
import { Provider as Redux } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { config } from '../store';

const store = config();

const Providers = ({ children }) => (
  <Redux store={store}>
    <Router>{children}</Router>
  </Redux>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
