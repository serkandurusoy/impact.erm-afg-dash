SELECT
    `general_info/q3_province` AS Province,
    SUM(IF(`s1_full_market_survey/q1_4_market_appearance` = 'well_function_busy',
        1,
        0)) / COUNT(*) * 100 AS ` % of Well Function Busy`,
    SUM(IF(`s1_full_market_survey/q1_4_market_appearance` = 'moderate_function',
        1,
        0)) / COUNT(*) * 100 AS `% of Moderate Function`
FROM
    impact_1.mpc
GROUP BY `general_info/q3_province` ASC;
