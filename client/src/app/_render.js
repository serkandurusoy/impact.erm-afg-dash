import React from 'react';
import { render } from 'react-dom';
import App from './_app';
import Providers from './_providers';

const Root = () => (
  <Providers>
    <App />
  </Providers>
);

const root = document.getElementById('root');

render(<Root />, root);
