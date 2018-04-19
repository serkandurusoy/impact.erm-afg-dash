import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './_routes';
import { Layout } from '../components/index';

const App = () => (
  <Layout>
    <Routes />
  </Layout>
);

export default hot(module)(App);
