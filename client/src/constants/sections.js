const SECTIONS = [
  {
    title: 'HEAT',
    subTitle: 'Household Emergency Assessment Tool',
    info: [
      'The ERM partners conduct systematic household level assessments aiming to identify and understand the nature of the emergency, the profile of the people affected by the emergency, their vulnerabilities and social-economic situation and the impact of the shock.',
      'Using the common Household Emergency Assessment Tool (HEAT) the partners gather detailed information on the household demographics, additional vulnerabilities, education, livelihoods, food security, WASH, shelter and priority needs. Based on the assessment ERM partners select and target beneficiaries for the ERM standard assistance. Accordingly the emergency assistance is targeted at directly conflict or disaster affected households, with a high level of vulnerability which have been recently displaced.',
    ],
    subTitles: [
      { index: 0, subTitle: 'General', anchor: 'general' },
      {
        index: 1,
        subTitle: 'Household Demographics',
        anchor: 'household-demographics',
      },
      {
        index: 2,
        subTitle: 'Additional Vulnerability Assessment',
        anchor: 'additional-vulnerability-assessment',
      },
      {
        index: 3,
        subTitle: 'General Assessment',
        anchor: 'general-assessment',
      },
      {
        index: 4,
        subTitle: 'Financial & Asset Assessment',
        anchor: 'financial-asset-assessment',
      },
      {
        index: 5,
        subTitle: 'Food & Nutrition Assessment',
        anchor: 'food-nutrition-assessment',
      },
      { index: 6, subTitle: 'Wash Assessment', anchor: 'wash-assessment' },
      {
        index: 7,
        subTitle: 'Shelter & NFI Assessment',
        anchor: 'shelter-nfi-assessment',
      },
      {
        index: 8,
        subTitle: 'Beneficiaries’ Priorities',
        anchor: 'beneficiaries-priorities',
      },
    ],
  },
  {
    title: 'MPC',
    subTitle: 'Multi-Purpose Cash',
    info: [
      'In addition to the HEAT need assessment the ERM partners are conducting rapid market assessments in order to determine whether markets are functional enough to allow a cash-based response. The market assessments inform on whether the local markets are safe to access and whether prices of key commodities are within a reasonable range of the established baseline prices. The aim of the survey is not to provide a full supply chain and market analysis, but only to quickly assess the appropriateness of cash based assistance at that given time.',
    ],
    subTitles: [
      {
        index: 0,
        subTitle: 'Average Current Selling Prices',
        anchor: 'average-current-selling-prices',
      },
      {
        index: 1,
        subTitle: 'Market Appearance (Functionality)',
        anchor: 'market-appearance-functionality',
      },
      { index: 2, subTitle: 'Market Size', anchor: 'market-size' },
      {
        index: 3,
        subTitle: 'Market Size by Province',
        anchor: 'market-size-by-province',
      },
      {
        index: 4,
        subTitle: 'Reported Maximum Rent Amount',
        anchor: 'reported-maximum-rent-amount',
      },
      {
        index: 5,
        subTitle: 'Reported Minimum Rent Amount',
        anchor: 'reported-minimum-rent-amount',
      },
    ],
  },
  {
    title: 'PDM',
    subTitle: 'Post-Distribution Monitoring',
    info: [
      'The ERM partners have committed themselves to carry out post distribution monitoring (PDM) according to standards defined in the common rational for the Emergency Response Mechanism. The monitoring takes place two months after emergency assistance has been provided. It consists of a household survey and can include a Focus Group Discussion.',
      'The survey should include ten percent (10%) of the assisted households, or at least ten households for caseloads with less than 100 HHs assisted. It should be attempted to include an equal representation of men and women, especially for caseloads over 100 HHs. ERM partners are using for the household survey the common PDM questionnaire of the Cash and Voucher Working Group. The findings of the PDM allows the ERM partners to assess the quality and short-term outcomes of the multi-purpose cash assistance.',
    ],
    subTitles: [
      { index: 0, subTitle: 'General', anchor: 'general' },
      { index: 1, subTitle: 'Cash Distribution', anchor: 'cash-distribution' },
      { index: 2, subTitle: 'Impact', anchor: 'impact' },
    ],
  },
];

export default SECTIONS;
