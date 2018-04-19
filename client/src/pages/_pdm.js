import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, ProvinceFilter } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import SECTIONS from '../constants/sections';
import DELETEME_GRAPH from './DELETEME_GRAPH.png';

const SECTION = SECTIONS.find(({ title }) => title === 'PDM');

const Pdm = () => (
  <div>
    <Helmet title="PDM" />
    <Header
      className="header--subpage__pdm"
      title="PDM"
      subtitle={SECTION.subTitle}
      iconClass="icon--tools"
    >
      <div className="header__lists">
        {chunkedArray(1, SECTION.subTitles).map((column, index) => (
          <div key={index} className="header__list">
            {column.map(section => (
              <div key={section} className="header__list-item">
                {section}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Header>
    <main className="main-content">
      <div className="container-fluid">
        <section className="subpage">
          <h2 className="subpage__title">Overview</h2>
          <div className="subpage__content">
            {SECTION.info.map((text, index) => (
              <div key={index} className="subpage__content-item">
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg--gray-1">
        <ProvinceFilter />

        <section className="content__single">
          <div className="graph">
            <h4 className="graph__title">
              General Information<a className="graph__full" href="#">
                <span className="icon icon--arrow-top-right" />
              </a>
            </h4>
            <div className="graph__subtitle">Lorem ipsum</div>
            <div className="graph__graph">
              <img className="img-fluid" src={DELETEME_GRAPH} />
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
);

export default Pdm;
