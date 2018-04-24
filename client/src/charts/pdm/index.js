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

const Charts = ({ sectionFilter, provinceFilter, districtFilter }) => (
  <div>
    {(sectionFilter === null || sectionFilter.includes('General')) && (
      <div>
        <NumberOfHHs
          title="General"
          subTitle="Number of HHs Monitored"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <NumberOfHHsPerProvince
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
          title="Cash Distribution"
          subTitle="Reported Appropriateness of Targeting"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AverageCashReceived
          title="Cash Distribution"
          subTitle="Reported Average Amount of Cash Assistance Received"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <SafetyOfTravel
          title="Cash Distribution"
          subTitle="Reported Safety of Travel to Distribution Site"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <TravelTime
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
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Blankets)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsClothes
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Clothes)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsDebtRepayment
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Debt Repayment)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsEducation
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Education)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsFood
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Food)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsHealth
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Health)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsHygieneItems
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Hygiene Items)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsKitchenItems
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Kitchen Items)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsRent
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Rent)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsSaved
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Saved)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsShelterRepair
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Shelter Repair)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsTransportation
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Transportation)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AmountSpentOnHHNeedsUtilities
          title="Impact"
          subTitle="Reported Amount Spent on HH Needs (Utilities)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <FoodSecurityIndex
          title="Impact"
          subTitle="Food Security Index"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <ImpactOfCashAssistance
          title="Impact"
          subTitle="Reported Impact of Cash Assistance on Well Being of HH"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <LevelOfDebtCompared
          title="Impact"
          subTitle="Reported Level of Debt Compared to One Month Ago"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <LevelOfDebtComparedPerProvince
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
