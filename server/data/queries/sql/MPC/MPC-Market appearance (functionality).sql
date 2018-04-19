SELECT
    `general_info/q3_province` AS Province,
    `s1_full_market_survey/q1_4_market_appearance` AS `Market Appearance`
FROM
    impact_1.mpc
ORDER BY `general_info/q3_province` ASC;

/*
	A province can have different market appearance based on organization or district ?
*/

SELECT
    `general_info/q3_province` AS Province,
    SUM(IF(`s1_full_market_survey/q1_4_market_appearance` = 'well_function_busy',
        1,
        0)) AS `Well Function Busy`,
    SUM(IF(`s1_full_market_survey/q1_4_market_appearance` = 'moderate_function',
        1,
        0)) AS `Moderate Function`
FROM
    impact_1.mpc
GROUP BY `general_info/q3_province` ASC;

/*
	A province can have different market appearance based on organization or district ?
*/
