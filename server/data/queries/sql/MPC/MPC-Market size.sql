SELECT
    `general_info/q3_province` as Province,
    `s1_full_market_survey/q1_3_market_size` as `Market Size`
FROM
    impact_1.mpc
ORDER BY `general_info/q3_province` ASC;

/*
	 A province can have different market sizes based on organization ?
*/