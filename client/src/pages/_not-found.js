import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/index';

const NotFound = () => (
  <div>
    <Helmet title="Not Found" />
    <Header
      className="header--subpage__notfound"
      title="404"
      subTitle="The requested page cannot be found"
      iconClass="icon--sign"
    />
  </div>
);

export default NotFound;
