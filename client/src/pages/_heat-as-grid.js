import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Header, ProvinceFilter } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import SECTIONS from '../constants/sections';

const SECTION = SECTIONS.find(({ title }) => title === 'HEAT');

class Heat extends Component {
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
        <Helmet title="GRID PROTOTYPE" />
        <Header
          className="header--subpage__heat"
          title="HEAT"
          subTitle={SECTION.subTitle}
          iconClass="icon--tools"
        >
          <div className="header__lists">
            {chunkedArray(3, SECTION.subTitles).map((column, index) => (
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
              <div className="graph--horizontal" id="anchor-4">
                <div className="graph__col--30">
                  <h4 className="graph__title">General Assessment</h4>
                  <div className="graph__description">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vivamus suscipit
                    tortor eget felis porttitor volutpat. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui.
                  </div>
                </div>
                <div className="graph__col--70">
                  <div className="graph__grid-2">
                    <div className="graph__graph">
                      <div className="graph__subtitle">Lorem ipsum</div>
                      <div className="graph__placeholder">
                        <a className="graph__full" href="#">
                          <span className="icon icon--arrow-top-right" />
                        </a>
                        <img className="img-fluid" src="/images/graph.png" />
                      </div>
                    </div>
                    <div className="graph__graph">
                      <div className="graph__subtitle">Lorem ipsum</div>
                      <div className="graph__placeholder">
                        <a className="graph__full" href="#">
                          <span className="icon icon--arrow-top-right" />
                        </a>
                        <img className="img-fluid" src="/images/graph.png" />
                      </div>
                    </div>
                    <div className="graph__graph">
                      <div className="graph__subtitle">Lorem ipsum</div>
                      <div className="graph__placeholder">
                        <a className="graph__full" href="#">
                          <span className="icon icon--arrow-top-right" />
                        </a>
                        <img className="img-fluid" src="/images/graph.png" />
                      </div>
                    </div>
                    <div className="graph__graph">
                      <div className="graph__subtitle">Lorem ipsum</div>
                      <div className="graph__placeholder">
                        <a className="graph__full" href="#">
                          <span className="icon icon--arrow-top-right" />
                        </a>
                        <img className="img-fluid" src="/images/graph.png" />
                      </div>
                    </div>
                  </div>
                  <div className="graph__graph">
                    <div className="graph__subtitle">Lorem ipsum</div>
                    <div className="graph__placeholder">
                      <a className="graph__full" href="#">
                        <span className="icon icon--arrow-top-right" />
                      </a>
                      <img className="img-fluid" src="/images/graph.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: 'cyan',
                  color: 'purple',
                  textAlign: 'center',
                  padding: 40,
                }}
              >
                TODO: @PIOTR YOU CAN USE THIS PLACE TO IMPLEMENT THE GRID<br />
                Please use <strong>className</strong>instead of{' '}
                <strong>class</strong> when you are giving classes<br />
                Styles are already being compiled as css with prefixes, so you
                can use the existing scss files to add the new style rules<br />
                Before making a commit, run <strong>
                  yarn run lint-fix
                </strong>{' '}
                in the project root otherwise you may not be able to commit
              </div>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default Heat;
