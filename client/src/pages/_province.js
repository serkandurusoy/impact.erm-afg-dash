import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import classNames from 'classnames';
import { Header, SectionFilter } from '../components/index';
import chunkedArray from '../utils/chunkedArray';
import PROVINCE_INFO from '../constants/province-info';
import SECTIONS from '../constants/sections';
import DELETEME_GRAPH from './DELETEME_GRAPH.png';

class Province extends Component {
  static propTypes = {
    /* eslint-disable react/no-typos */
    match: ReactRouterPropTypes.match.isRequired,
    /* eslint-enable react/no-typos */
  };

  constructor(props) {
    super(props);
    const allDistricts = PROVINCE_INFO.find(
      province => province.slug === this.props.match.params.provinceSlug,
    )
      .districts.map(district => district.name)
      .sort();
    const allSections = SECTIONS;
    this.state = {
      filterActive: false,
      selectedTab: 'HEAT',
      selectedSections: allSections.map(({ title, subTitles }) => ({
        title,
        subTitles,
      })),
      allSections,
      selectedDistricts: allDistricts,
      allDistricts,
    };
  }

  toggleSection = (title, subTitleIndex) => {
    const { selectedSections, allSections } = this.state;
    const selected = selectedSections
      .find(section => section.title === title)
      .subTitles.find(subTitle => subTitle.index === subTitleIndex);
    if (selected) {
      this.setState({
        selectedSections: [
          ...selectedSections.filter(section => section.title !== title),
          {
            ...(selectedSections.find(section => section.title === title) ||
              {}),
            subTitles: selectedSections
              .find(section => section.title === title)
              .subTitles.filter(subTitle => subTitle.index !== subTitleIndex),
          },
        ],
      });
    } else {
      this.setState({
        selectedSections: [
          ...selectedSections.filter(section => section.title !== title),
          {
            ...(selectedSections.find(section => section.title === title) ||
              {}),
            subTitles: [
              ...((
                selectedSections.find(section => section.title === title) || {}
              ).subTitles || []),
              allSections
                .find(section => section.title === title)
                .subTitles.find(subTitle => subTitle.index === subTitleIndex),
            ].sort((l, r) => (l.index > r.index ? 1 : -1)),
          },
        ],
      });
    }
  };

  toggleSectionAll = title => {
    const { selectedSections, allSections } = this.state;
    const allSelected =
      allSections.find(section => section.title === title).subTitles.length ===
      selectedSections.find(section => section.title === title).subTitles
        .length;

    if (allSelected) {
      this.setState({
        selectedSections: [
          ...selectedSections.filter(section => section.title !== title),
          {
            ...selectedSections.find(section => section.title === title),
            subTitles: [],
          },
        ],
      });
    } else {
      this.setState({
        selectedSections: [
          ...selectedSections.filter(section => section.title !== title),
          {
            ...selectedSections.find(section => section.title === title),
            subTitles: allSections.find(section => section.title === title)
              .subTitles,
          },
        ],
      });
    }
  };

  toggleFilter = e => {
    e.preventDefault();
    this.setState({
      filterActive: !this.state.filterActive,
    });
  };

  selectTab = (e, tab) => {
    e.preventDefault();
    this.setState({ selectedTab: tab });
  };

  toggleDistrict = name => {
    const { selectedDistricts } = this.state;
    if (selectedDistricts.includes(name)) {
      this.setState({
        selectedDistricts: selectedDistricts.filter(p => p !== name),
      });
    } else {
      this.setState({
        selectedDistricts: [...selectedDistricts, name].sort(),
      });
    }
  };

  toggleAllDistricts = () => {
    const { selectedDistricts, allDistricts } = this.state;
    if (selectedDistricts.length === allDistricts.length) {
      this.setState({
        selectedDistricts: [],
      });
    } else {
      this.setState({
        selectedDistricts: allDistricts,
      });
    }
  };

  render() {
    const {
      match: {
        params: { provinceSlug },
      },
    } = this.props;

    const {
      selectedTab,
      selectedSections,
      allSections,
      selectedDistricts,
      allDistricts,
      filterActive,
    } = this.state;

    const { label, info, infoSource, districts } = PROVINCE_INFO.find(
      province => province.slug === provinceSlug,
    );

    const districtCount = allDistricts.length;

    const districtColumns = chunkedArray(
      Math.floor(
        districtCount / (districtCount < 10 ? 2 : districtCount < 15 ? 3 : 4),
      ),
      districts,
    );

    return (
      <div>
        <Helmet title={label} />
        <Header
          className="header--subpage__province"
          title={label}
          subTitle={`${label} province is divided into ${
            districts.length
          } districts`}
          iconClass="icon--sign"
        >
          <div className="header__lists">
            {districtColumns.map(column => (
              <div key={column[0].name} className="header__list">
                {column.map(({ name, label: districtLabel }) => (
                  <div key={name} className="header__list-item">
                    {districtLabel}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Link className="header__back" to="/provinces">
            <span className="icon icon--arrow-left" />Back to list of all
            provinces
          </Link>
        </Header>
        <main className="main-content">
          <div className="container-fluid">
            <section className="subpage">
              <h2 className="subpage__title">Overview</h2>
              <div className="subpage__content">
                {/* if there are two paragraphs, duplicate the whole div, not just the p */}
                <div className="subpage__content-item">
                  <p>{info}</p>
                  <p className="header--subpage__province__info-source">
                    <span>Source: </span>
                    <a
                      href={infoSource}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="content--thin-left">
            <section className="content__left bg--blue-3">
              <h4 className="content__left-title">Districts</h4>
              <div className="checkboxes">
                <div className="checkboxes__item">
                  <input
                    id="province"
                    type="checkbox"
                    className="checkbox"
                    checked={selectedDistricts.length === districtCount}
                    onChange={() => this.toggleAllDistricts()}
                  />
                  <label className="label main" htmlFor="province">
                    ALL DISTRICTS
                  </label>
                </div>
                {districts.map(({ name, label: districtLabel }) => (
                  <div key={name} className="checkboxes__item">
                    <input
                      id={name}
                      type="checkbox"
                      className="checkbox"
                      checked={selectedDistricts.includes(name)}
                      onChange={() => this.toggleDistrict(name)}
                    />
                    <label className="label" htmlFor={name}>
                      {districtLabel}
                    </label>
                  </div>
                ))}
              </div>
            </section>
            <section className="content__right bg--gray-1">
              <SectionFilter
                allSections={allSections}
                selectedSections={selectedSections}
                toggleSection={this.toggleSection}
                toggleSectionAll={this.toggleSectionAll}
                filterActive={filterActive}
                toggleFilter={this.toggleFilter}
              />
              <div className="accordion">
                <div
                  className={classNames('accordion__item', {
                    active: selectedTab === 'HEAT',
                  })}
                >
                  <a
                    href="#HEAT"
                    className="accordion__item-title"
                    onClick={e => this.selectTab(e, 'HEAT')}
                  >
                    HEAT
                  </a>
                  <div className="accordion__item-content" id="HEAT">
                    {SECTIONS.find(
                      section => section.title === 'HEAT',
                    ).info.map((text, index) => <p key={index}>{text}</p>)}
                    <div className="graph">
                      <h4 className="graph__title">
                        Household<a className="graph__full" href="#">
                          <span className="icon icon--arrow-top-right" />
                        </a>
                      </h4>
                      <div className="graph__subtitle">Lorem ipsum</div>
                      <div className="graph__graph">
                        <img className="img-fluid" src={DELETEME_GRAPH} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames('accordion__item', {
                    active: selectedTab === 'MPC',
                  })}
                >
                  <a
                    href="#MPC"
                    className="accordion__item-title"
                    onClick={e => this.selectTab(e, 'MPC')}
                  >
                    MPC
                  </a>
                  <div className="accordion__item-content" id="MPC">
                    {SECTIONS.find(section => section.title === 'MPC').info.map(
                      (text, index) => <p key={index}>{text}</p>,
                    )}
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
                  </div>
                </div>
                <div
                  className={classNames('accordion__item', {
                    active: selectedTab === 'PDM',
                  })}
                >
                  <a
                    href="#PDM"
                    className="accordion__item-title"
                    onClick={e => this.selectTab(e, 'PDM')}
                  >
                    PDM
                  </a>
                  <div className="accordion__item-content" id="PDM">
                    {SECTIONS.find(section => section.title === 'PDM').info.map(
                      (text, index) => <p key={index}>{text}</p>,
                    )}
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
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>{' '}
      </div>
    );
  }
}

export default Province;
