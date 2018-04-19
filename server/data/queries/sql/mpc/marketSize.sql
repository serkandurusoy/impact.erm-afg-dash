SELECT
    `general_info/q3_province` AS Province,
    SUM(IF(`s1_full_market_survey/q1_3_market_size` = 'large',
        1,
        0)) AS `large`,
    SUM(IF(`s1_full_market_survey/q1_3_market_size` = 'medium',
        1,
        0)) AS `medium`,
    SUM(IF(`s1_full_market_survey/q1_3_market_size` = 'small',
        1,
        0))  AS `small`
FROM
    impact_1.mpc
GROUP BY `general_info/q3_province`;
