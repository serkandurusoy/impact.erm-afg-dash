import React from 'react';
import PropTypes from 'prop-types';
import ComponentLoader from '../component-loader';

const NumberOfHHs = ComponentLoader({
  loader: () => import(/* webpackPrefetch: true */ './general/NumberOfHHs'),
});

const NumberOfHHsPerProvince = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './general/NumberOfHHsPerProvince'),
});

const AppropriatenessOfTargeting = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/AppropriatenessOfTargeting'),
});

const AverageCashReceived = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/AverageCashReceived'),
});

const SafetyOfTravel = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/SafetyOfTravel'),
});

const TravelTime = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/TravelTime'),
});

const FoodSecurityIndex = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/FoodSecurityIndex'),
});

const ImpactOfCashAssistance = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/ImpactOfCashAssistance'),
});

const LevelOfDebtCompared = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/LevelOfDebtCompared'),
});

const LevelOfDebtComparedPerProvince = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/LevelOfDebtComparedPerProvince'),
});

const AmountSpentOnHHNeedsBlankets = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsBlankets'),
});

const AmountSpentOnHHNeedsClothes = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsClothes'),
});

const AmountSpentOnHHNeedsDebtRepayment = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsDebtRepayment'),
});

const AmountSpentOnHHNeedsEducation = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsEducation'),
});

const AmountSpentOnHHNeedsFood = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsFood'),
});

const AmountSpentOnHHNeedsHealth = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsHealth'),
});

const AmountSpentOnHHNeedsHygieneItems = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsHygieneItems'),
});

const AmountSpentOnHHNeedsKitchenItems = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsKitchenItems'),
});

const AmountSpentOnHHNeedsRent = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsRent'),
});

const AmountSpentOnHHNeedsSaved = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsSaved'),
});

const AmountSpentOnHHNeedsShelterRepair = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsShelterRepair'),
});

const AmountSpentOnHHNeedsTransportation = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsTransportation'),
});

const AmountSpentOnHHNeedsUtilities = ComponentLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsUtilities'),
});

const Charts = (
  { sectionFilter, provinceFilter, districtFilter }, // eslint-disable-line no-unused-vars
) => (
  <div>
    {(sectionFilter === null || sectionFilter.includes('General')) && (
      <div>
        <NumberOfHHs
          apiPath="/api/query/pdm/general/numberOfHHs"
          title="General"
          subTitle="Number of HHs Monitored"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <NumberOfHHsPerProvince
          apiPath="/api/query/pdm/general/numberOfHHsPerProvince"
          title="General"
          subTitle="Number of HHs Monitored per Province"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}

    {(sectionFilter === null ||
      sectionFilter.includes('Cash Distribution')) && (
      <div>
        <div className="graph__row">
          <AppropriatenessOfTargeting
            apiPath="/api/query/pdm/cashDistribution/appropriatenessOfTargeting"
            title="Cash Distribution"
            subTitle="Reported Appropriateness of Targeting"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <AverageCashReceived
            apiPath="/api/query/pdm/cashDistribution/averageCashReceived"
            title="Cash Distribution"
            subTitle="Reported Average Amount of Cash Assistance Received"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
        <div className="graph__row">
          <SafetyOfTravel
            apiPath="/api/query/pdm/cashDistribution/safetyOfTravel"
            title="Cash Distribution"
            subTitle="Reported Safety of Travel to Distribution Site"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <TravelTime
            apiPath="/api/query/pdm/cashDistribution/travelTime"
            title="Cash Distribution"
            subTitle="Reported Travel Time to Distribution Site"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}

    {(sectionFilter === null || sectionFilter.includes('Impact')) && (
      <div>
        <AmountSpentOnHHNeedsBlankets
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsBlankets"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Blankets)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsClothes
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsClothes"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Clothes)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsDebtRepayment
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsDebtRepayment"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Debt Repayment)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsEducation
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsEducation"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Education)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsFood
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsFood"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Food)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsHealth
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsHealth"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Health)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsHygieneItems
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsHygieneItems"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Hygiene Items)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsKitchenItems
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsKitchenItems"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Kitchen Items)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsRent
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsRent"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Rent)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsSaved
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsSaved"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Saved)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsShelterRepair
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsShelterRepair"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Shelter Repair)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsTransportation
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsTransportation"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Transportation)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsUtilities
          apiPath="/api/query/pdm/impact/amountSpendOnHHNeedsUtilities"
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Utilities)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <FoodSecurityIndex
          apiPath="/api/query/pdm/impact/foodSecurityIndex"
          title="Impact"
          subTitle="Food Security Index (Food Consumption)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <div className="graph__row">
          <ImpactOfCashAssistance
            apiPath="/api/query/pdm/impact/impactOfCashAssistance"
            title="Impact"
            subTitle="Reported Impact of Cash Assistance on Well Being of HH"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <LevelOfDebtCompared
            apiPath="/api/query/pdm/impact/levelOfDebtCompared"
            title="Impact"
            subTitle="Reported Level of Debt Compared to One Month Ago"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
        <LevelOfDebtComparedPerProvince
          apiPath="/api/query/pdm/impact/levelOfDebtComparedPerProvince"
          title="Impact"
          subTitle="Reported Level of Debt Compared to One Month Ago per Province"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
  </div>
);

Charts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Charts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default Charts;
