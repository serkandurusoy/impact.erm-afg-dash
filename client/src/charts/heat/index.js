import React from 'react';
import PropTypes from 'prop-types';
import ChartLoader from '../_lib/chart-loader';

const NumberOfHH = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './general/NumberOfHH'),
});

const NumberOfHHPerProvince = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './general/NumberOfHHPerProvince'),
});

const AgeDisaggregation = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './demographics/AgeDisaggregation'),
});

const AverageNumberOfBreadWinner = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './demographics/AverageNumberOfBreadWinner'),
});

const FrequencyWithNationalId = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './demographics/FrequencyWithNationalId'),
});

const ChildHeaded = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/ChildHeaded'),
});

const ChronicallyIllHeaded = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/ChronicallyIllHeaded'),
});

const DisabledHeaded = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/DisabledHeaded'),
});

const ElderlyHeaded = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/ElderlyHeaded'),
});

const FemaleHeaded = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/FemaleHeaded'),
});

const VulnerabilitiesMap = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/VulnerabilitiesMap'),
});

const DisplacementCategory = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/DisplacementCategory'),
});

const PossibilityOfReturn = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/PossibilityOfReturn'),
});

const ProvinceOfOrigin = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/ProvinceOfOrigin'),
});

const ReasonForNoReturn = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/ReasonForNoReturn'),
});

const AverageIncomeAfterShock = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './financial/AverageIncomeAfterShock'),
});

const AverageIncomeAfterShockPerProvince = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './financial/AverageIncomeAfterShockPerProvince'),
});

const AverageIncomeBeforeShock = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './financial/AverageIncomeBeforeShock'),
});

const LevelOfDebt = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './financial/LevelOfDebt'),
});

const AccessToMarket = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './food/AccessToMarket'),
});

const AvailableFoodStocks = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './food/AvailableFoodStocks'),
});

const AverageDistanceToMarket = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './food/AverageDistanceToMarket'),
});

const FCSIndex = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './food/FCSIndex'),
});

const AccessToBathingWater = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './wash/AccessToBathingWater'),
});

const AccessToCookingWater = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './wash/AccessToCookingWater'),
});

const AccessToDrinkingWater = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './wash/AccessToDrinkingWater'),
});

const AccessToLatrine = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './wash/AccessToLatrine'),
});

const TypeOfLatrine = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './wash/TypeOfLatrine'),
});

const Accomodation = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './shelter/Accomodation'),
});

const AverageRent = ChartLoader({
  loader: () => import(/* webpackPrefetch: true */ './shelter/AverageRent'),
});

const FirstHHPriority = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './priorities/FirstHHPriority'),
});

const SecondHHPriority = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './priorities/SecondHHPriority'),
});

const ThirdHHPriority = ChartLoader({
  loader: () =>
    import(/* webpackPrefetch: true */ './priorities/ThirdHHPriority'),
});

const Charts = ({ sectionFilter, provinceFilter, districtFilter }) => (
  <div>
    {(sectionFilter === null || sectionFilter.includes('General')) && (
      <div>
        <NumberOfHH
          title="General"
          subTitle="Number of Households Assessed"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <NumberOfHHPerProvince
          title="General"
          subTitle="Number of Households Assessed Per Province"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Household Demographics')) && (
      <div>
        <AgeDisaggregation
          title="Household Demographics"
          subTitle="Age disaggregation"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AverageNumberOfBreadWinner
          title="Household Demographics"
          subTitle="Average Number of Breadwinner per HH"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <FrequencyWithNationalId
          title="Household Demographics"
          subTitle="Frequency of HHs with National ID"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Additional Vulnerability Assessment')) && (
      <div>
        <ChildHeaded
          title="Additional Vulnerability Assessment"
          subTitle="Number and Percentage of Child Headed HHs"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <ChronicallyIllHeaded
          title="Additional Vulnerability Assessment"
          subTitle="Number and Percentage of HHs with Chronically Ill Member"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <DisabledHeaded
          title="Additional Vulnerability Assessment"
          subTitle="Number and Percentage of HHs with Disabled Member"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <ElderlyHeaded
          title="Additional Vulnerability Assessment"
          subTitle="Number and Percentage of Elderly Headed HHs"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <FemaleHeaded
          title="Additional Vulnerability Assessment"
          subTitle="Number and Percentage of Female Headed HHs"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <VulnerabilitiesMap
          title="Additional Vulnerability Assessment"
          subTitle="Vulnerabilities Map"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('General Assessment')) && (
      <div>
        <DisplacementCategory
          title="General Assessment"
          subTitle="Displacement Category"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <PossibilityOfReturn
          title="General Assessment"
          subTitle="Reported Possibility to Return to Place of Origin"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <ProvinceOfOrigin
          title="General Assessment"
          subTitle="Reported Province of Origin"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <ReasonForNoReturn
          title="General Assessment"
          subTitle="Reported Reason for not Being Able to Return to Origin"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Financial & Asset Assessment')) && (
      <div>
        <AverageIncomeAfterShock
          title="Financial & Asset Assessment"
          subTitle="Average Income After Shock"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AverageIncomeAfterShockPerProvince
          title="Financial & Asset Assessment"
          subTitle="Average Income After Shock per Province"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AverageIncomeBeforeShock
          title="Financial & Asset Assessment"
          subTitle="Average Income Before Shock"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <LevelOfDebt
          title="Financial & Asset Assessment"
          subTitle="Level of Debt"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Food & Nutrition Assessment')) && (
      <div>
        <AccessToMarket
          title="Food & Nutrition Assessment"
          subTitle="Reported Access to Market"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AvailableFoodStocks
          title="Food & Nutrition Assessment"
          subTitle="Reported Food Stocks Available"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AverageDistanceToMarket
          title="Food & Nutrition Assessment"
          subTitle="Average Distance to Market (In Minutes)"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <FCSIndex
          title="Food & Nutrition Assessment"
          subTitle="Food Coping Strategy Index"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null || sectionFilter.includes('Wash Assessment')) && (
      <div>
        <AccessToBathingWater
          title="Wash Assessment"
          subTitle="Reported Access to Bathing Water"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AccessToCookingWater
          title="Wash Assessment"
          subTitle="Reported Access to Cooking Water"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AccessToDrinkingWater
          title="Wash Assessment"
          subTitle="Reported Access to Drinking Water"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AccessToLatrine
          title="Wash Assessment"
          subTitle="Reported Access to Latrine"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <TypeOfLatrine
          title="Wash Assessment"
          subTitle="Reported Type of Latrine Available"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Shelter & NFI Assessment')) && (
      <div>
        <Accomodation
          title="Shelter & NFI Assessment"
          subTitle="Reported Type and Arrangement of Accomodation"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <AverageRent
          title="Shelter & NFI Assessment"
          subTitle="Average Reported Rent Amount"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Beneficiaries’ Priorities')) && (
      <div>
        <FirstHHPriority
          title="Beneficiaries’ Priorities"
          subTitle="Reported First Household Priority"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <SecondHHPriority
          title="Beneficiaries’ Priorities"
          subTitle="Reported Second Household Priority"
          provinceFilter={provinceFilter}
          districtFilter={districtFilter}
        />
        <ThirdHHPriority
          title="Beneficiaries’ Priorities"
          subTitle="Reported Third Household Priority"
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
