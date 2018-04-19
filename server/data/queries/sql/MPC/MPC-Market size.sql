SELECT
    `general_info/q3_province` as Province,
    `s1_full_market_survey/q1_3_market_size` as `Market Size`
FROM
    impact_1.mpc
ORDER BY `general_info/q3_province` ASC;

/*
	 A province can have different market sizes based on organization which approach to be followed ?
*/

SELECT
    `general_info/q3_province` AS Province,
    SUM(IF(`s1_full_market_survey/q1_3_market_size` = 'large',
        1,
        0)) / COUNT(*) * 100 AS `% of Market Size Large`,
    SUM(IF(`s1_full_market_survey/q1_3_market_size` = 'medium',
        1,
        0)) / COUNT(*) * 100 AS `% of Market Size Medium`,
    SUM(IF(`s1_full_market_survey/q1_3_market_size` = 'small',
        1,
        0)) / COUNT(*) * 100 AS `% of Market Size Small`
FROM
    impact_1.mpc
GROUP BY `general_info/q3_province` ASC;
