import React from 'react';
import { render } from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import App from './_app';
import Providers from './_providers';

smoothscroll.polyfill();

const Root = () => (
  <Providers>
    <App />
  </Providers>
);

const root = document.getElementById('root');

render(<Root />, root);
