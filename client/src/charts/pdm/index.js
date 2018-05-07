import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentLoader from '../component-loader';

const NumberOfHHs = ComponentLoader({
  subTitle: 'Number of HHs Monitored',
  loader: () => import(/* webpackPrefetch: true */ './general/NumberOfHHs'),
});

const NumberOfHHsPerProvince = ComponentLoader({
  subTitle: 'Number of HHs Monitored per Province',
  loader: () =>
    import(/* webpackPrefetch: true */ './general/NumberOfHHsPerProvince'),
});

const AppropriatenessOfTargeting = ComponentLoader({
  subTitle: 'Reported Appropriateness of Targeting',
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/AppropriatenessOfTargeting'),
});

const AverageCashReceived = ComponentLoader({
  subTitle: 'Reported Average Amount of Cash Assistance Received',
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/AverageCashReceived'),
});

const SafetyOfTravel = ComponentLoader({
  subTitle: 'Reported Safety of Travel to Distribution Site',
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/SafetyOfTravel'),
});

const TravelTime = ComponentLoader({
  subTitle: 'Reported Travel Time to Distribution Site',
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/TravelTime'),
});

const FoodSecurityIndex = ComponentLoader({
  subTitle: 'Food Consumption',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/FoodSecurityIndex'),
});

const ImpactOfCashAssistance = ComponentLoader({
  subTitle: 'Reported Impact of Cash Assistance on Well Being of HH',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/ImpactOfCashAssistance'),
});

const LevelOfDebtCompared = ComponentLoader({
  subTitle: 'Reported Level of Debt Compared to One Month Ago',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/LevelOfDebtCompared'),
});

const LevelOfDebtComparedPerProvince = ComponentLoader({
  subTitle: 'Reported Level of Debt Compared to One Month Ago per Province',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/LevelOfDebtComparedPerProvince'),
});

const AmountSpentOnHHNeedsBlankets = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Blankets)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsBlankets'),
});

const AmountSpentOnHHNeedsClothes = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Clothes)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsClothes'),
});

const AmountSpentOnHHNeedsDebtRepayment = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Debt Repayment)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsDebtRepayment'),
});

const AmountSpentOnHHNeedsEducation = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Education)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsEducation'),
});

const AmountSpentOnHHNeedsFood = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Food)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsFood'),
});

const AmountSpentOnHHNeedsHealth = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Health)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsHealth'),
});

const AmountSpentOnHHNeedsHygieneItems = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Hygiene Items)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsHygieneItems'),
});

const AmountSpentOnHHNeedsKitchenItems = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Kitchen Items)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsKitchenItems'),
});

const AmountSpentOnHHNeedsRent = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Rent)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsRent'),
});

const AmountSpentOnHHNeedsSaved = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Saved)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsSaved'),
});

const AmountSpentOnHHNeedsShelterRepair = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Shelter Repair)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsShelterRepair'),
});

const AmountSpentOnHHNeedsTransportation = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Transportation)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsTransportation'),
});

const AmountSpentOnHHNeedsUtilities = ComponentLoader({
  subTitle: 'Reported Amount Spent on HH Needs (Utilities)',
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsUtilities'),
});

class Charts extends Component {
  static propTypes = {
    sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
    provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
    districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
    toTop: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sectionFilter: null,
    provinceFilter: null,
    districtFilter: null,
  };

  state = {
    displayHHNeeds: 'AmountSpentOnHHNeedsBlankets',
  };

  toggleDisplayHHNeeds = e => {
    this.setState({ displayHHNeeds: e.target.value });
  };

  render() {
    const { sectionFilter, provinceFilter, districtFilter, toTop } = this.props;
    const { displayHHNeeds } = this.state;

    return (
      <div>
        {(sectionFilter === null || sectionFilter.includes('General')) && (
          <div className="graph--horizontal" id="general">
            <div className="graph__col--30">
              <h4 className="graph__title">General</h4>
              <div className="graph__description" />
              <div className="go2top">
                <a onClick={toTop} href="#top" className="go2top__link active">
                  <span className="icon icon--arrow-top" />
                </a>
              </div>
            </div>
            <div className="graph__col--70">
              <NumberOfHHs
                apiPath="/api/query/pdm/general/numberOfHHs"
                provinceFilter={provinceFilter}
                districtFilter={districtFilter}
              />
              <NumberOfHHsPerProvince
                apiPath="/api/query/pdm/general/numberOfHHsPerProvince"
                provinceFilter={provinceFilter}
                districtFilter={districtFilter}
              />
            </div>
          </div>
        )}

        {(sectionFilter === null ||
          sectionFilter.includes('Cash Distribution')) && (
          <div className="graph--horizontal" id="cash-distribution">
            <div className="graph__col--30">
              <h4 className="graph__title">Cash Distribution</h4>
              <div className="graph__description" />
              <div className="go2top">
                <a onClick={toTop} href="#top" className="go2top__link active">
                  <span className="icon icon--arrow-top" />
                </a>
              </div>
            </div>
            <div className="graph__col--70">
              <AppropriatenessOfTargeting
                apiPath="/api/query/pdm/cashDistribution/appropriatenessOfTargeting"
                provinceFilter={provinceFilter}
                districtFilter={districtFilter}
              />
              <AverageCashReceived
                apiPath="/api/query/pdm/cashDistribution/averageCashReceived"
                provinceFilter={provinceFilter}
                districtFilter={districtFilter}
              />
              <div className="graph__grid-2">
                <SafetyOfTravel
                  apiPath="/api/query/pdm/cashDistribution/safetyOfTravel"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
                <TravelTime
                  apiPath="/api/query/pdm/cashDistribution/travelTime"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              </div>
            </div>
          </div>
        )}

        {(sectionFilter === null || sectionFilter.includes('Impact')) && (
          <div className="graph--horizontal" id="impact">
            <div className="graph__col--30">
              <h4 className="graph__title">Impact</h4>
              <div className="graph__description" />
              <div className="go2top">
                <a onClick={toTop} href="#top" className="go2top__link active">
                  <span className="icon icon--arrow-top" />
                </a>
              </div>
            </div>
            <div className="graph__col--70">
              {displayHHNeeds === 'AmountSpentOnHHNeedsBlankets' && (
                <AmountSpentOnHHNeedsBlankets
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsBlankets"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsClothes' && (
                <AmountSpentOnHHNeedsClothes
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsClothes"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsDebtRepayment' && (
                <AmountSpentOnHHNeedsDebtRepayment
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsDebtRepayment"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsEducation' && (
                <AmountSpentOnHHNeedsEducation
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsEducation"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsFood' && (
                <AmountSpentOnHHNeedsFood
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsFood"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsHealth' && (
                <AmountSpentOnHHNeedsHealth
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsHealth"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsHygieneItems' && (
                <AmountSpentOnHHNeedsHygieneItems
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsHygieneItems"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsKitchenItems' && (
                <AmountSpentOnHHNeedsKitchenItems
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsKitchenItems"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsRent' && (
                <AmountSpentOnHHNeedsRent
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsRent"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsSaved' && (
                <AmountSpentOnHHNeedsSaved
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsSaved"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsShelterRepair' && (
                <AmountSpentOnHHNeedsShelterRepair
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsShelterRepair"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsTransportation' && (
                <AmountSpentOnHHNeedsTransportation
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsTransportation"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              {displayHHNeeds === 'AmountSpentOnHHNeedsUtilities' && (
                <AmountSpentOnHHNeedsUtilities
                  toggleDisplayHHNeeds={this.toggleDisplayHHNeeds}
                  displayHHNeeds={displayHHNeeds}
                  apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsUtilities"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              )}
              <FoodSecurityIndex
                apiPath="/api/query/pdm/impact/foodSecurityIndex"
                provinceFilter={provinceFilter}
                districtFilter={districtFilter}
              />
              <div className="graph__grid-2">
                <ImpactOfCashAssistance
                  apiPath="/api/query/pdm/impact/impactOfCashAssistance"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
                <LevelOfDebtCompared
                  apiPath="/api/query/pdm/impact/levelOfDebtCompared"
                  provinceFilter={provinceFilter}
                  districtFilter={districtFilter}
                />
              </div>
              <LevelOfDebtComparedPerProvince
                apiPath="/api/query/pdm/impact/levelOfDebtComparedPerProvince"
                provinceFilter={provinceFilter}
                districtFilter={districtFilter}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Charts;
