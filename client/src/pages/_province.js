import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Header } from '../components/global';
import chunkedArray from '../utils/chunkedArray';
import PROVINCE_INFO from '../environment/constants/_province-info';
import provinceDELETEME from './_province-DELETEME.png';

const Province = ({
  match: {
    params: { provinceSlug },
  },
}) => {
  const { label, info, districts } = PROVINCE_INFO.find(
    province => province.slug === provinceSlug,
  );
  const count = districts.length;
  const districtColumns = chunkedArray(
    Math.floor(count / (count < 10 ? 2 : count < 15 ? 3 : 4)),
    districts,
  );
  return (
    <div>
      <Helmet title={label} />
      <Header
        className="header--subpage__province"
        title={label}
        subtitle={`${label} province is divided into ${
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
              </div>
            </div>
          </section>
        </div>

        <section className="content--thin-left">
          <section className="content__left bg--blue-3">
            <h4 className="content__left-title">Districts</h4>
            <div className="checkboxes">
              {districts.map(({ name, label: districtLabel }) => (
                <div key={name} className="checkboxes__item">
                  <input
                    id={name}
                    type="checkbox"
                    className="checkbox"
                    defaultChecked
                  />
                  <label className="label" htmlFor={name}>
                    {districtLabel}
                  </label>
                </div>
              ))}
            </div>
          </section>
          <section className="content__right bg--gray-1">
            <div className="filter active">
              <a className="filter__link" href="#">
                <span className="icon icon--filter" />Filter
              </a>
              <form>
                <div className="filter__content">
                  <div className="filter__column checkboxes">
                    <div className="checkboxes__item--main">
                      <input
                        id="filter-checkbox0"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox0">
                        HEAT
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox1"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox1">
                        Household
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox2"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox2">
                        Additional Vulnerability Assessment
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox3"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox3">
                        General Assessment
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox4"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox4">
                        Financial & Asset Assessment
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox5"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox5">
                        Food & Nutrition Assessment
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox6"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox6">
                        Wash Assessment
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox7"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox7">
                        Shelter & NFI Assessment
                      </label>
                    </div>
                  </div>
                  <div className="filter__column checkboxes">
                    <div className="checkboxes__item--main">
                      <input
                        id="filter-checkbox10"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox10">
                        Market
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox11"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox11">
                        General Information
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox12"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox12">
                        Household profile
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox13"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox13">
                        Cash distribution process
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox14"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox14">
                        Use of cash assistance
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox15"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox15">
                        Coping strategies
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox16"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox16">
                        Multi-sector outcome
                      </label>
                    </div>
                  </div>
                  <div className="filter__column checkboxes">
                    <div className="checkboxes__item--main">
                      <input
                        id="filter-checkbox20"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox20">
                        PDM
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox21"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox21">
                        General Information
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox22"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox22">
                        Full market survey
                      </label>
                    </div>
                    <div className="checkboxes__item">
                      <input
                        id="filter-checkbox23"
                        type="checkbox"
                        className="checkbox"
                        defaultChecked
                      />
                      <label className="label" htmlFor="filter-checkbox23">
                        Prices survey
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="accordion">
              <div className="accordion__item active">
                <a href="#accordion-1" className="accordion__item-title">
                  HEAT
                </a>
                <div className="accordion__item-content" id="accordion-1">
                  <p>
                    The ERM partners conduct systematic household level
                    assessments aiming to identify and understand the nature of
                    the emergency, the profile of the people affected by the
                    emergency, their vulnerabilities and social-economic
                    situation and the impact of the shock.
                  </p>
                  <p>
                    Using the common Household Emergency Assessment Tool (HEAT)
                    the partners gather detailed information on the household
                    demographics, additional vulnerabilities, education,
                    livelihoods, food security, WASH, shelter and priority
                    needs. Based on the assessment ERM partners select and
                    target beneficiaries for the ERM standard assistance.
                    Accordingly the emergency assistance is targeted at directly
                    conflict or disaster affected households, with a high level
                    of vulnerability which have been recently displaced.
                  </p>

                  <div className="graph">
                    <h4 className="graph__title">
                      Household<a className="graph__full" href="#">
                        <span className="icon icon--arrow-top-right" />
                      </a>
                    </h4>
                    <div className="graph__subtitle">Lorem ipsum</div>
                    <div className="graph__graph">
                      <img className="img-fluid" src={provinceDELETEME} />
                    </div>
                  </div>

                  <div className="graph">
                    <h4 className="graph__title">
                      Additional Vulnerability Assessment<a
                        className="graph__full"
                        href="#"
                      >
                        <span className="icon icon--arrow-top-right" />
                      </a>
                    </h4>
                    <div className="graph__subtitle">Lorem ipsum</div>
                    <div className="graph__graph">
                      <img className="img-fluid" src={provinceDELETEME} />
                    </div>
                  </div>

                  <div className="graph">
                    <h4 className="graph__title">
                      General Assessment<a className="graph__full" href="#">
                        <span className="icon icon--arrow-top-right" />
                      </a>
                    </h4>
                    <div className="graph__subtitle">Lorem ipsum</div>
                    <div className="graph__graph">
                      <img className="img-fluid" src={provinceDELETEME} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion__item">
                <a href="#accordion-2" className="accordion__item-title">
                  MPC
                </a>
                <div className="accordion__item-content" id="accordion-2">
                  <p>
                    In additional to the HEAT need assessment the ERM partners
                    are conducting rapid market assessments in order to
                    determine whether markets are functional enough to allow a
                    cash-based response. The market assessments inform on
                    whether the local markets are safe to access and whether
                    prices of key commodities are within a reasonable range of
                    the established baseline prices. The aim of the survey is
                    not to provide a full supply chain and market analysis, but
                    only to quickly assess the appropriateness of cash based
                    assistance at that given time.
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <a href="#accordion-3" className="accordion__item-title">
                  PDM
                </a>
                <div className="accordion__item-content" id="accordion-3">
                  <p>
                    The ERM partners have committed themselves to carry out post
                    distribution monitoring (PDM) according to standards defined
                    in the common rational for the Emergency Response Mechanism.
                    The monitoring takes place two months after emergency
                    assistance has been provided. It consists of a household
                    survey and can include a Focus Group Discussion.
                  </p>
                  <p>
                    The survey should include ten percent (10%) of the assisted
                    households, or at least ten households for caseloads with
                    less than 100 HHs assisted. It should be attempted to
                    include an equal representation of men and women, especially
                    for caseloads over 100 HHs. ERM partners are using for the
                    household survey the common PDM questionnaire of the Cash
                    and Voucher Working Group. The findings of the PDM allows
                    the ERM partners to assess the quality and short-term
                    outcomes of the multi-purpose cash assistance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>{' '}
    </div>
  );
};

Province.propTypes = {
  /* eslint-disable react/no-typos */
  match: ReactRouterPropTypes.match.isRequired,
  /* eslint-enable react/no-typos */
};

export default Province;
