import React from 'react';
import PropTypes from 'prop-types';
import ChartLoader from '../_lib/chart-loader';

const NumberOfHHs = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './general/NumberOfHHs'),
});

const NumberOfHHsPerProvince = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './general/NumberOfHHsPerProvince'),
});

const AppropriatenessOfTargeting = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/AppropriatenessOfTargeting'),
});

const AverageCashReceived = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/AverageCashReceived'),
});

const SafetyOfTravel = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/SafetyOfTravel'),
});

const TravelTime = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './cashDistribution/TravelTime'),
});

const FoodSecurityIndex = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/FoodSecurityIndex'),
});

const ImpactOfCashAssistance = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/ImpactOfCashAssistance'),
});

const LevelOfDebtCompared = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/LevelOfDebtCompared'),
});

const LevelOfDebtComparedPerProvince = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/LevelOfDebtComparedPerProvince'),
});

const AmountSpentOnHHNeedsBlankets = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsBlankets'),
});

const AmountSpentOnHHNeedsClothes = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsClothes'),
});

const AmountSpentOnHHNeedsDebtRepayment = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsDebtRepayment'),
});

const AmountSpentOnHHNeedsEducation = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsEducation'),
});

const AmountSpentOnHHNeedsFood = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsFood'),
});

const AmountSpentOnHHNeedsHealth = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsHealth'),
});

const AmountSpentOnHHNeedsHygieneItems = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsHygieneItems'),
});

const AmountSpentOnHHNeedsKitchenItems = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsKitchenItems'),
});

const AmountSpentOnHHNeedsRent = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsRent'),
});

const AmountSpentOnHHNeedsSaved = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsSaved'),
});

const AmountSpentOnHHNeedsShelterRepair = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsShelterRepair'),
});

const AmountSpentOnHHNeedsTransportation = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './impact/AmountSpentOnHHNeedsTransportation'),
});

const AmountSpentOnHHNeedsUtilities = ChartLoader({
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
          apiPath="/api/query/pdm/impact/FoodSecurityIndex"
          title="Impact"
          subTitle="Food Security Index"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
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
