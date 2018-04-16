import React from 'react';
import { render } from 'react-dom';
import App from './_app';
import Provider from './_providers';

const Root = () => (
  <Provider>
    <App />
  </Provider>
);

const root = document.getElementById('root');

render(<Root />, root);
