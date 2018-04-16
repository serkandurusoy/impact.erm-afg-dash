import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { config } from '../store';

const store = config();

const Providers = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
