import React from 'react';
import PropTypes from 'prop-types';
import ComponentLoader from '../component-loader';

const NumberOfHH = ComponentLoader({
  subTitle: 'Number of Households Assessed',
  loader: () => import(/* webpackPrefetch: true */ './general/NumberOfHH'),
});

const NumberOfHHPerProvince = ComponentLoader({
  subTitle: 'Number of Households Assessed Per Province',
  loader: () =>
    import(/* webpackPrefetch: true */ './general/NumberOfHHPerProvince'),
});

const AgeDisaggregation = ComponentLoader({
  subTitle: 'Age Disaggregation',
  loader: () =>
    import(/* webpackPrefetch: true */ './demographics/AgeDisaggregation'),
});

const AverageNumberOfBreadWinner = ComponentLoader({
  subTitle: 'Average Number of Breadwinner per HH',
  loader: () =>
    import(/* webpackPrefetch: true */ './demographics/AverageNumberOfBreadWinner'),
});

const FrequencyWithNationalId = ComponentLoader({
  subTitle: 'Frequency of HHs with National ID',
  loader: () =>
    import(/* webpackPrefetch: true */ './demographics/FrequencyWithNationalId'),
});

const ChildHeaded = ComponentLoader({
  subTitle: 'Number and Percentage of Child Headed HHs',
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/ChildHeaded'),
});

const ChronicallyIllHeaded = ComponentLoader({
  subTitle: 'Number and Percentage of HHs with Chronically Ill Member',
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/ChronicallyIllHeaded'),
});

const DisabledHeaded = ComponentLoader({
  subTitle: 'Number and Percentage of HHs with Disabled Member',
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/DisabledHeaded'),
});

const ElderlyHeaded = ComponentLoader({
  subTitle: 'Number and Percentage of Elderly Headed HHs',
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/ElderlyHeaded'),
});

const FemaleHeaded = ComponentLoader({
  subTitle: 'Number and Percentage of Female Headed HHs',
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/FemaleHeaded'),
});

const VulnerabilitiesMap = ComponentLoader({
  subTitle: 'Vulnerabilities Map',
  loader: () =>
    import(/* webpackPrefetch: true */ './vulnerabilities/VulnerabilitiesMap'),
});

const DisplacementCategory = ComponentLoader({
  subTitle: 'Displacement Category',
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/DisplacementCategory'),
});

const PossibilityOfReturn = ComponentLoader({
  subTitle: 'Reported Possibility to Return to Place of Origin',
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/PossibilityOfReturn'),
});

const ProvinceOfOrigin = ComponentLoader({
  subTitle: 'Reported Province of Origin',
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/ProvinceOfOrigin'),
});

const ReasonForNoReturn = ComponentLoader({
  subTitle: 'Reported Reason for not Being Able to Return to Origin',
  loader: () =>
    import(/* webpackPrefetch: true */ './generalAssessment/ReasonForNoReturn'),
});

const AverageIncomeAfterShock = ComponentLoader({
  subTitle: 'Average Income After Shock',
  loader: () =>
    import(/* webpackPrefetch: true */ './financial/AverageIncomeAfterShock'),
});

const AverageIncomeAfterShockPerProvince = ComponentLoader({
  subTitle: 'Average Income After Shock per Province',
  loader: () =>
    import(/* webpackPrefetch: true */ './financial/AverageIncomeAfterShockPerProvince'),
});

const AverageIncomeBeforeShock = ComponentLoader({
  subTitle: 'Average Income Before Shock',
  loader: () =>
    import(/* webpackPrefetch: true */ './financial/AverageIncomeBeforeShock'),
});

const LevelOfDebt = ComponentLoader({
  subTitle: 'Level of Debt',
  loader: () => import(/* webpackPrefetch: true */ './financial/LevelOfDebt'),
});

const AccessToMarket = ComponentLoader({
  subTitle: 'Reported Access to Market',
  loader: () => import(/* webpackPrefetch: true */ './food/AccessToMarket'),
});

const AvailableFoodStocks = ComponentLoader({
  subTitle: 'Reported Food Stocks Available',
  loader: () =>
    import(/* webpackPrefetch: true */ './food/AvailableFoodStocks'),
});

const AverageDistanceToMarket = ComponentLoader({
  subTitle: 'Average Distance to Market (In Minutes)',
  loader: () =>
    import(/* webpackPrefetch: true */ './food/AverageDistanceToMarket'),
});

const FCSIndex = ComponentLoader({
  subTitle: 'Food Coping Strategy Index',
  loader: () => import(/* webpackPrefetch: true */ './food/FCSIndex'),
});

const AccessToBathingWater = ComponentLoader({
  subTitle: 'Reported Access to Bathing Water',
  loader: () =>
    import(/* webpackPrefetch: true */ './wash/AccessToBathingWater'),
});

const AccessToCookingWater = ComponentLoader({
  subTitle: 'Reported Access to Cooking Water',
  loader: () =>
    import(/* webpackPrefetch: true */ './wash/AccessToCookingWater'),
});

const AccessToDrinkingWater = ComponentLoader({
  subTitle: 'Reported Access to Drinking Water',
  loader: () =>
    import(/* webpackPrefetch: true */ './wash/AccessToDrinkingWater'),
});

const AccessToLatrine = ComponentLoader({
  subTitle: 'Reported Access to Latrine',
  loader: () => import(/* webpackPrefetch: true */ './wash/AccessToLatrine'),
});

const TypeOfLatrine = ComponentLoader({
  subTitle: 'Reported Type of Latrine Available',
  loader: () => import(/* webpackPrefetch: true */ './wash/TypeOfLatrine'),
});

const Accomodation = ComponentLoader({
  subTitle: 'Reported Type and Arrangement of Accomodation',
  loader: () => import(/* webpackPrefetch: true */ './shelter/Accomodation'),
});

const AverageRent = ComponentLoader({
  subTitle: 'Average Reported Rent Amount',
  loader: () => import(/* webpackPrefetch: true */ './shelter/AverageRent'),
});

const FirstHHPriority = ComponentLoader({
  subTitle: 'Reported First Household Priority',
  loader: () =>
    import(/* webpackPrefetch: true */ './priorities/FirstHHPriority'),
});

const SecondHHPriority = ComponentLoader({
  subTitle: 'Reported Second Household Priority',
  loader: () =>
    import(/* webpackPrefetch: true */ './priorities/SecondHHPriority'),
});

const ThirdHHPriority = ComponentLoader({
  subTitle: 'Reported Third Household Priority',
  loader: () =>
    import(/* webpackPrefetch: true */ './priorities/ThirdHHPriority'),
});

const Charts = (
  { sectionFilter, provinceFilter, districtFilter, toTop }, // eslint-disable-line no-unused-vars
) => (
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
          <NumberOfHH
            apiPath="/api/query/heat/general/numberOfHH"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <NumberOfHHPerProvince
            apiPath="/api/query/heat/general/numberOfHHPerProvince"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Household Demographics')) && (
      <div className="graph--horizontal" id="household-demographics">
        <div className="graph__col--30">
          <h4 className="graph__title">Household Demographics</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <AgeDisaggregation
            apiPath="/api/query/heat/demographics/ageDisaggregation"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <div className="graph__grid-2">
            <AverageNumberOfBreadWinner
              apiPath="/api/query/heat/demographics/averageNumberOfBreadWinner"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <FrequencyWithNationalId
              apiPath="/api/query/heat/demographics/frequencyWithNationalId"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Additional Vulnerability Assessment')) && (
      <div
        className="graph--horizontal"
        id="additional-vulnerability-assessment"
      >
        <div className="graph__col--30">
          <h4 className="graph__title">Additional Vulnerability Assessment</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <div className="graph__grid-2">
            <ChildHeaded
              apiPath="/api/query/heat/vulnerabilities/childHeaded"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <ChronicallyIllHeaded
              apiPath="/api/query/heat/vulnerabilities/chronicallyIllHeaded"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
          <div className="graph__grid-2">
            <DisabledHeaded
              apiPath="/api/query/heat/vulnerabilities/disabledHeaded"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <ElderlyHeaded
              apiPath="/api/query/heat/vulnerabilities/elderlyHeaded"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
          <div className="graph__grid-2">
            <FemaleHeaded
              apiPath="/api/query/heat/vulnerabilities/femaleHeaded"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <VulnerabilitiesMap
              apiPath="/api/query/heat/vulnerabilities/vulnerabilitiesMap"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('General Assessment')) && (
      <div className="graph--horizontal" id="general-assessment">
        <div className="graph__col--30">
          <h4 className="graph__title">General Assessment</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <div className="graph__grid-2">
            <DisplacementCategory
              apiPath="/api/query/heat/generalAssessment/displacementCategory"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <PossibilityOfReturn
              apiPath="/api/query/heat/generalAssessment/possibilityOfReturn"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
          <ProvinceOfOrigin
            apiPath="/api/query/heat/generalAssessment/provinceOfOrigin"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <ReasonForNoReturn
            apiPath="/api/query/heat/generalAssessment/reasonForNoReturn"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Financial & Asset Assessment')) && (
      <div className="graph--horizontal" id="financial-asset-assessment">
        <div className="graph__col--30">
          <h4 className="graph__title">Financial & Asset Assessment</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <div className="graph__grid-2">
            <AverageIncomeBeforeShock
              apiPath="/api/query/heat/financial/averageIncomeBeforeShock"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <AverageIncomeAfterShock
              apiPath="/api/query/heat/financial/averageIncomeAfterShock"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
          <AverageIncomeAfterShockPerProvince
            apiPath="/api/query/heat/financial/averageIncomeAfterShockPerProvince"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <LevelOfDebt
            apiPath="/api/query/heat/financial/levelOfDebts"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Food & Nutrition Assessment')) && (
      <div className="graph--horizontal" id="food-nutrition-assessment">
        <div className="graph__col--30">
          <h4 className="graph__title">Food & Nutrition Assessment</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <div className="graph__grid-2">
            <AccessToMarket
              apiPath="/api/query/heat/food/accessToMarket"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <AvailableFoodStocks
              apiPath="/api/query/heat/food/availableFoodStocks"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
          <AverageDistanceToMarket
            apiPath="/api/query/heat/food/averageDistanceToMarket"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <FCSIndex
            apiPath="/api/query/heat/food/fcsIndex"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}
    {(sectionFilter === null || sectionFilter.includes('Wash Assessment')) && (
      <div className="graph--horizontal" id="wash-assessment">
        <div className="graph__col--30">
          <h4 className="graph__title">Wash Assessment</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <AccessToBathingWater
            apiPath="/api/query/heat/wash/accessToBathingWater"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <AccessToCookingWater
            apiPath="/api/query/heat/wash/accessToCookingWater"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <AccessToDrinkingWater
            apiPath="/api/query/heat/wash/accessToDrinkingWater"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <div className="graph__grid-2">
            <AccessToLatrine
              apiPath="/api/query/heat/wash/accessToLatrine"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
            <TypeOfLatrine
              apiPath="/api/query/heat/wash/typeOfLatrine"
              provinceFilter={provinceFilter}
              districtFilter={districtFilter}
            />
          </div>
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Shelter & NFI Assessment')) && (
      <div className="graph--horizontal" id="shelter-nfi-assessment">
        <div className="graph__col--30">
          <h4 className="graph__title">Shelter & NFI Assessment</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <Accomodation
            apiPath="/api/query/heat/shelter/accomodation"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <AverageRent
            apiPath="/api/query/heat/shelter/averageRent"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}
    {(sectionFilter === null ||
      sectionFilter.includes('Beneficiaries’ Priorities')) && (
      <div className="graph--horizontal" id="beneficiaries-priorities">
        <div className="graph__col--30">
          <h4 className="graph__title">Beneficiaries’ Priorities</h4>
          <div className="graph__description" />
          <div className="go2top">
            <a onClick={toTop} href="#top" className="go2top__link active">
              <span className="icon icon--arrow-top" />
            </a>
          </div>
        </div>
        <div className="graph__col--70">
          <FirstHHPriority
            apiPath="/api/query/heat/priorities/firstHHpriority"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <SecondHHPriority
            apiPath="/api/query/heat/priorities/secondHHpriority"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
          <ThirdHHPriority
            apiPath="/api/query/heat/priorities/thirdHHpriority"
            provinceFilter={provinceFilter}
            districtFilter={districtFilter}
          />
        </div>
      </div>
    )}
  </div>
);

Charts.propTypes = {
  sectionFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  provinceFilter: PropTypes.arrayOf(PropTypes.number.isRequired),
  districtFilter: PropTypes.arrayOf(PropTypes.string.isRequired),
  toTop: PropTypes.func.isRequired,
};

Charts.defaultProps = {
  sectionFilter: null,
  provinceFilter: null,
  districtFilter: null,
};

export default Charts;
