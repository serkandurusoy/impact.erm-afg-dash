import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Helmet } from 'react-helmet';
import { Header, ProvinceFilter } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import SECTIONS from '../constants/sections';
import HeatCharts from '../charts/heat';

const SECTION = SECTIONS.find(({ title }) => title === 'HEAT');

class Heat extends Component {
  static propTypes = {
    /* eslint-disable react/no-typos */
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    /* eslint-enable react/no-typos */
  };

  state = {
    selectedProvinces: [],
  };

  toggleSelectedProvince = i => {
    const { selectedProvinces } = this.state;
    if (selectedProvinces.includes(i)) {
      this.setState({
        selectedProvinces: selectedProvinces.filter(p => p !== i),
      });
    } else {
      this.setState({
        selectedProvinces: [...selectedProvinces, i].sort(),
      });
    }
  };

  scrollToTop = e => {
    if (e && e.preventDefault) e.preventDefault();
    this.props.history.push(this.props.location.pathname);
  };

  render() {
    const { selectedProvinces } = this.state;

    return (
      <div>
        <Helmet title="HEAT" />
        <Header
          className="header--subpage__heat"
          title="HEAT"
          subTitle={SECTION.subTitle}
          iconClass="icon--tools"
        >
          <div className="header__lists">
            {chunkedArray(3, SECTION.subTitles).map((column, index) => (
              <div key={index} className="header__list">
                {column.map(({ subTitle, index: subTitleIndex, anchor }) => (
                  <div key={subTitleIndex} className="header__list-item">
                    <a href={`#${anchor}`}>{subTitle}</a>
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
            <ProvinceFilter
              selectedProvinces={selectedProvinces}
              toggleSelectedProvince={this.toggleSelectedProvince}
            />

            <section className="content__single">
              <HeatCharts
                provinceFilter={selectedProvinces}
                toTop={this.scrollToTop}
              />
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default Heat;
