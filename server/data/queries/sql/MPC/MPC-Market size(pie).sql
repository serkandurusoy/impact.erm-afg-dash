SELECT 
    COUNT(IF(`s1_full_market_survey/q1_3_market_size` = 'large',
        1,
        NULL)) / COUNT(`s1_full_market_survey/q1_3_market_size`) * 100 AS `Market Percentage Large`,
    COUNT(IF(`s1_full_market_survey/q1_3_market_size` = 'medium',
        1,
        NULL)) / COUNT(`s1_full_market_survey/q1_3_market_size`) * 100 AS `Market Percentage Medium`,
    COUNT(IF(`s1_full_market_survey/q1_3_market_size` = 'small',
        1,
        NULL)) / COUNT(`s1_full_market_survey/q1_3_market_size`) * 100 AS `Market Percentage Small`
FROM
    impact_1.mpc;

/*
	 A province can have different market sizes based on organization ?
*/