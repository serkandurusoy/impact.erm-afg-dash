/* Money Spend on Blankets  */

SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/female_hhd`) > 0,
        'Female',
        NULL) AS `Head of Household`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Blankets `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/female_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/child_hhd`) > 0,
        'Child',
        NULL) AS `Head of Household `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Blankets `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/child_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/elderly_hhd`) > 0,
        'Elderly',
        NULL) AS `Head of Household for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A for Blankets `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/elderly_hhd` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/chronically_ill`) > 0,
        'Chronicall Ill',
        NULL) AS `Head of Household  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Blankets `
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/chronically_ill` = 'TRUE' 
UNION SELECT 
    IF(COUNT(`s1_household_profile/head_of_household/hh_disability`) > 0,
        'HH Disability',
        NULL) AS `Head of Household  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_nothing',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost Nothing  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'less_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of Less Than Half  for Blankets `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'more_than_half',
        1,
        0)) / COUNT(*) * 100 AS `% of More Than Half  for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = 'almost_all',
        1,
        0)) / COUNT(*) * 100 AS `% of Almost All  for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_5_blankets_nfis` = '',
        1,
        0)) / COUNT(*) * 100 AS `% of N/A  for Education`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/hh_disability` = 'TRUE'
    
    