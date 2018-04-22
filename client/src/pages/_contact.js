import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/index';

const Contact = () => (
  <div>
    <Helmet title="Contact" />
    <Header
      className="header--subpage__contact"
      title="Contact"
      subTitle="www.reach-initiative.org"
      iconClass="icon--sign"
    />
  </div>
);

export default Contact;
