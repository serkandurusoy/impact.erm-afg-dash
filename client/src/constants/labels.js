/*

General rules => Replace underscores with space Capitalize first letters

s1_full_market_survey/q1_10_current_price_wheat_flour => numeric values

s1_full_market_survey/q1_10_1_current_price_rice => numeric

s3_use_of_cash* columns=> replace spaces with “Unanswered”

S3_GEN_ASSESSq3_1_disp_categ => İf the first one = “no_disp” the otherʼs corresponding is empty (we call it N/A)

S3_GEN_ASSESSq3_4_can_go_origin_place => if empty => N/A

S3_GEN_ASSESSq3_4_1_if_no => if empty => N/A

S5_FOOD_ASSESSq5_2_distance_marketkm => numerical, blanks are NULL exclude NULL in queries

S5_FOOD_ASSESSq5_2_distance_marketmin => numerical, blanks are NULL exclude NULL in queries

S6_washq6_6_latrine_type => ıf blanks => N/A

S7_SHELTERq7_4_if_rented_amount => numerical, blanks are NULL exclude NULL in queries

*/

const LABELS = {
  column: {
    general_infoq5_organization: 'Organization',
    general_infoq1_province: 'Province',
    general_infoq2_district: 'District',
    S1_headOfHouseholdq4_4_nid_numb: 'Respondent has Tazkera/National ID',
    S1_headOfHouseholdnew_born_male:
      'Number of male newborns/infants (0-5 years)',
    S1_headOfHouseholdnew_born_female:
      'Number of female newborns/infants (0-5 years)',
    S1_headOfHouseholdchildren_6_18_male:
      'Number of male children (6-18 years)',
    S1_headOfHouseholdchildren_6_18_female:
      'Number of female children (6-18 years)',
    S1_headOfHouseholdadult_19_59_male: 'Number of male adults (19-59 years)',
    S1_headOfHouseholdadult_19_59_female:
      'Number of female adults (19-59 years)',
    S1_headOfHouseholdelders_60_abv_male:
      'Number of male elders (60 years and older)',
    S2_AdditionalVulnerabilityq2_1_elderly_hdd: 'Elderly headed HH',
    S2_AdditionalVulnerabilityq2_2_female_hdd: 'Female headed HH',
    S2_AdditionalVulnerabilityq2_3_child_hdd: 'Child headed HH',
    S2_AdditionalVulnerabilityq2_4_physical: 'Disabled HH member',
    S2_AdditionalVulnerabilityq2_5_chronically: 'Chronically ill HH member',
    S3_GEN_ASSESSq3_1_disp_categ: 'Type of displacement',
    q3_4_can_go_origin_place:
      'Reported possibility to return to place of origin',
    S3_GEN_ASSESSq3_4_1_if_no:
      'Reported reason for not being able to return to place of origin',
    S4_financial_ASSESSmale_breadwinner: 'Number of male breadwinners in HH',
    S4_financial_ASSESSfemale_breadwinner:
      'Number of female breadwinners in HH',
    S4_financial_ASSESSq4_3_income_before: 'Monthly HH income before the shock',
    S4_financial_ASSESSq4_4_income_after: 'Monthly HH income after the shock',
    S4_financial_ASSESSq4_5_new_debts: 'Amount of debt contracted since shock',
    S5_FOOD_ASSESSq5_1_access_market: 'Physical access to market',
    S5_FOOD_ASSESSq5_2_distance_marketkm: 'Distance to next market in km',
    S5_FOOD_ASSESSq5_2_distance_marketmin: 'Distance to next market in min',
    S5_FOOD_ASSESSq5_5_food_stocks: 'Reported food stocks available',
    S6_washq6_1_drinking_water: 'Reported access to enough drinking water',
    S6_washq6_1_bathing_water: 'Reported access to enough bathing water',
    S6_washq6_1_cooking_water: 'Reported access to enough cooking water',
    S6_washq6_2_main_source_water: 'Reported type of main water source',
    S6_washq6_5_latrine_available: 'Reported access to latrine',
    S6_washq6_6_latrine_type: 'Reported type of latrine available',
    S7_SHELTERq7_1_accomodation: 'Type of accomodation',
    S7_SHELTERq7_2_acc_arrangement: 'Arrangement for accomodation',
    S7_SHELTERq7_4_if_rented_amount: 'Reported monthly rent amount',
    s8_prioritiesFirst: 'Reported first HH priority',
    s8_prioritiesSecond: 'Reported second HH priority',
    s8_prioritiesthird: 'Reported third HH priority',
    CSI: 'Coping Strategy Index',
    rCSI_newThreshold: 'reduced Coping Strategy Index',
    FCS: 'Food Consumption Score',
    FCS_Level: 'Food Consumption Score level',
    FCS_rCSI: 'Food Security Index',
    s2_cash_distribution_processq2_1_do_u_think_gave_right_people:
      'Was the cash given to the right people',
    s2_cash_distribution_processq2_3_how_mach_cash:
      'Reported amount of cash assistance received',
    s2_cash_distribution_processq2_5_travel_more_than_1_hour:
      'Reported travel time to collect cash',
    s2_cash_distribution_processq2_6_feel_unsafe_when_travelling:
      'Reported safety of travel to cash collection site',
    s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd:
      'To be discussed, was blank',
    q3_5_spend_mony_hhd_the_past_1_month:
      'Amount of money spend in the last month per household item',
    s3_use_of_cash_assistanceq3_5_1_food: 'Food',
    s3_use_of_cash_assistanceq3_5_2_kitchen_items_nfis: 'Kitchen Items',
    s3_use_of_cash_assistanceq3_5_3_hygiene_items_nfis: 'Hygiene Items',
    s3_use_of_cash_assistanceq3_5_4_clothes_nfis: 'Clothes',
    s3_use_of_cash_assistanceq3_5_5_blankets_nfis: 'Blankets',
    s3_use_of_cash_assistanceq3_5_6_rent: 'Rent costs',
    s3_use_of_cash_assistanceq3_5_7_shelter_repair: 'Shelter Repair',
    s3_use_of_cash_assistanceq3_5_8_health: 'Health costs',
    s3_use_of_cash_assistanceq3_5_9_transportation: 'Transportation',
    s3_use_of_cash_assistanceq3_5_10_utillites: 'Utilities',
    s3_use_of_cash_assistanceq3_5_11_debt_repayment: 'Debt repayment',
    s3_use_of_cash_assistanceq3_5_12_education: 'Education',
    s3_use_of_cash_assistanceq3_5_13_saved: 'Saved',
    s3_use_of_cash_assistanceq3_5_14_other: 'Other',
    s5_multi_sector_outcome_indexq5_4_debt_compared:
      'Change of loan amount compared to one month ago',
    'general_info/q6_organization': 'Organization',
    'general_info/q3_province': 'Province',
    'general_info/q4_district': 'District',
    's1_full_market_survey/q1_3_market_size': 'Market size',
    's1_full_market_survey/q1_4_market_appearance': 'Market appearence',
    's1_full_market_survey/q1_10_current_price_wheat_flour':
      'Reported current selling price for wheat flour (AFN/kg):',
    's1_full_market_survey/q1_10_1_current_price_rice':
      'Reported current selling price for Rice (AFN/kg):',
    's1_full_market_survey/q1_10_2_current_price_oil':
      'Reported current selling price for Cooking oil (AFN/kg):',
    's1_full_market_survey/q1_10_3_current_price_diesel':
      'Reported current selling price for Diesel (AFN/lt):',
    's1_full_market_survey/q1_17_1_room_cost_min':
      'Reported minimum rent amount (AFN)',
    's1_full_market_survey/q1_17_2_room_cost_max':
      'Reported maximum rent amount (AFN)',
  },
  value: {
    rCSI_newThreshold: {
      1: 'High',
      2: 'Medium',
      3: 'No or low',
    },
    FCS_Level: {
      1: 'Poor food consumption',
      2: 'Borderline food consumption',
      3: 'Acceptable food consumption',
    },
    FCS_rCSI: {
      1: 'Food insecure',
      2: 'Moderately food insecure',
      3: 'Food insecure',
    },
    S3_GEN_ASSESSq3_1_disp_categ: {
      conf_idp: 'Conflict IDP',
      nat_disaster_idp: 'Natural disaster IDP',
      doc_returnee: 'Documented Returnee',
      undoc_returnee: 'Undocumented Returnee',
      no_disp: 'No Displacement',
    },
    S4_financial_ASSESSq4_5_new_debts: {
      no_dept: 'No debts',
      less_afs_2000: 'Less then 2000 AFN',
      between_2000_8000: 'Between 2000-8000 AFN',
      more_8000: 'More than 8000 AFN',
    },
  },
  abbreviation: {
    HEAT: 'Household Emergency Assessment Tool',
    MPC: 'Multi-purpose cash',
    PDM: 'Post-distribution monitoring',
    CSI: 'Coping Strategy Index',
    rCSI: 'reduced Coping Strategy Index',
    HH: 'Household',
    FCS: 'Food Consumption Score',
    FSI: 'Food Security Index',
  },
};

export const getLabel = key =>
  LABELS.column[key] ||
  (key
    ? key
        .split('_')
        .map(w => w[0].toUpperCase() + w.substr(1))
        .join(' ')
    : 'N/A');

export default LABELS;
