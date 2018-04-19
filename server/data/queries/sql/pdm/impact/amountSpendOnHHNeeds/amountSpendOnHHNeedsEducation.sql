SELECT
    IF(COUNT(`s1_household_profile/head_of_household/female_hhd`) > 0,
        's1_household_profile/head_of_household/female_hhd',
        NULL) AS `Head of Household`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_nothing',
        1,
        0))  AS `almost_nothing`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'less_than_half',
        1,
        0))  AS `less_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'more_than_half',
        1,
        0))  AS `more_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_all',
        1,
        0))  AS `almost_all`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = '',
        1,
        0))  AS `N/A`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/female_hhd` = 'TRUE'
UNION SELECT
    IF(COUNT(`s1_household_profile/head_of_household/child_hhd`) > 0,
        's1_household_profile/head_of_household/child_hhd',
        NULL) AS `Head of Household `,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_nothing',
        1,
        0))  AS `almost_nothing`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'less_than_half',
        1,
        0))  AS `less_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'more_than_half',
        1,
        0))  AS `more_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_all',
        1,
        0))  AS `almost_all`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = '',
        1,
        0))  AS `N/A`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/child_hhd` = 'TRUE'
UNION SELECT
    IF(COUNT(`s1_household_profile/head_of_household/elderly_hhd`) > 0,
        's1_household_profile/head_of_household/child_hhd',
        NULL) AS `Head of Household for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_nothing',
        1,
        0))  AS `almost_nothing`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'less_than_half',
        1,
        0))  AS `less_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'more_than_half',
        1,
        0))  AS `more_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_all',
        1,
        0))  AS `almost_all`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = '',
        1,
        0))  AS `N/A`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/elderly_hhd` = 'TRUE'
UNION SELECT
    IF(COUNT(`s1_household_profile/head_of_household/chronically_ill`) > 0,
        's1_household_profile/head_of_household/chronically_ill',
        NULL) AS `Head of Household  for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_nothing',
        1,
        0))  AS `almost_nothing`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'less_than_half',
        1,
        0))  AS `less_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'more_than_half',
        1,
        0))  AS `more_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_all',
        1,
        0))  AS `almost_all`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = '',
        1,
        0))  AS `N/A`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/chronically_ill` = 'TRUE'
UNION SELECT
    IF(COUNT(`s1_household_profile/head_of_household/hh_disability`) > 0,
        's1_household_profile/head_of_household/hh_disability',
        NULL) AS `Head of Household  for Education`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_nothing',
        1,
        0))  AS `almost_nothing`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'less_than_half',
        1,
        0))  AS `less_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'more_than_half',
        1,
        0))  AS `more_than_half`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = 'almost_all',
        1,
        0))  AS `almost_all`,
    SUM(IF(`s3_use_of_cash_assistanceq3_5_12_education` = '',
        1,
        0))  AS `N/A`
FROM
    impact_1.pdm
WHERE
    `s1_household_profile/head_of_household/hh_disability` = 'TRUE'

