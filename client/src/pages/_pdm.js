import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Header, ProvinceFilter } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import SECTIONS from '../constants/sections';
import PdmCharts from '../charts/pdm';

const SECTION = SECTIONS.find(({ title }) => title === 'PDM');

class Pdm extends Component {
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

  render() {
    const { selectedProvinces } = this.state;

    return (
      <div>
        <Helmet title="PDM" />
        <Header
          className="header--subpage__pdm"
          title="PDM"
          subTitle={SECTION.subTitle}
          iconClass="icon--tools"
        >
          <div className="header__lists">
            {chunkedArray(1, SECTION.subTitles).map((column, index) => (
              <div key={index} className="header__list">
                {column.map(({ subTitle, index: subTitleIndex }) => (
                  <div key={subTitleIndex} className="header__list-item">
                    {subTitle}
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
              <PdmCharts provinceFilter={selectedProvinces} />
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default Pdm;
