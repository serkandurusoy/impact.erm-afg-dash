/* Money Spend on Food */

SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/female_hhd`) > 0,
        'Female',
        NULL) AS `Head of Household`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Food`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/female_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/child_hhd`) > 0,
        'Child',
        NULL) AS `Head of Household `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Food`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/child_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/elderly_hhd`) > 0,
        'Elderly',
        NULL) AS `Head of Household for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A for Food`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/elderly_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/chronically_ill`) > 0,
        'Chronicall Ill',
        NULL) AS `Head of Household  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Food`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/chronically_ill` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/hh_disability`) > 0,
        'HH Disability',
        NULL) AS `Head of Household  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Food`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_1_food` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Food`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/hh_disability` = 'TRUE'
    
    