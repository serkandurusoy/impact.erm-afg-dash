SELECT
    `general_info/q3_province` AS Province,
    SUM(IF(`s1_full_market_survey/q1_4_market_appearance` = 'well_function_busy',
        1,
        0)) `well_function_busy`,
    SUM(IF(`s1_full_market_survey/q1_4_market_appearance` = 'moderate_function',
        1,
        0)) `moderate_function`
FROM
    impact_1.mpc
GROUP BY `general_info/q3_province` ASC;
