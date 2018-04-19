SELECT
    SUM(IF(`S6_washq6_5_latrine_available` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `% of with Latrine Available`,
    SUM(IF(`S6_washq6_5_latrine_available` = 'no',
        1,
        0)) / COUNT(*) * 100 AS `% of Latrine Not Available`
FROM
    impact_1.heat;

