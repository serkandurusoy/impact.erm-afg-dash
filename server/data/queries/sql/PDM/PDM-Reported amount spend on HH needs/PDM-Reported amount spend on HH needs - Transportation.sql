/* Money Spend on Transportation   */

SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/female_hhd`) > 0,
        'Female',
        NULL) AS `Head of Household`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Transportation  `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/female_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/child_hhd`) > 0,
        'Child',
        NULL) AS `Head of Household `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Transportation  `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/child_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/elderly_hhd`) > 0,
        'Elderly',
        NULL) AS `Head of Household for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A for Transportation  `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/elderly_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/chronically_ill`) > 0,
        'Chronicall Ill',
        NULL) AS `Head of Household  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Transportation  `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/chronically_ill` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/hh_disability`) > 0,
        'HH Disability',
        NULL) AS `Head of Household  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Transportation  `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half  for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_9_transportation` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Education`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/hh_disability` = 'TRUE'
    
    