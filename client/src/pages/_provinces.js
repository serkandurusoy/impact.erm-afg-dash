import React from 'react';
import { Helmet } from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Header } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import PROVINCE_INFO from '../constants/province-info';

const provinceColumns = chunkedArray(7, PROVINCE_INFO);

const Provinces = ({ match }) => (
  <div>
    <Helmet title="Provinces" />
    <Header
      className="header--subpage__provinces"
      title="Provinces"
      subtitle="Afghanistan is divided into 34 provinces."
      iconClass="icon--tools"
    >
      <div className="header__lists">
        {provinceColumns.map(column => (
          <div key={column[0].slug} className="header__list">
            {column.map(({ slug, label }) => (
              <div key={slug} className="header__list-item">
                <a href={`${match.url}/${slug}`} className="header__list-link">
                  {label}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Header>
  </div>
);

Provinces.propTypes = {
  /* eslint-disable react/no-typos */
  match: ReactRouterPropTypes.match.isRequired,
  /* eslint-enable react/no-typos */
};

export default Provinces;
