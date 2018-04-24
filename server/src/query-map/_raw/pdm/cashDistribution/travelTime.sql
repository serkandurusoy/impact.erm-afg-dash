SELECT
    SUM(IF(`s2_cash_distribution_processq2_5_travel_more_than_1_hour` = 'yes',
        1,
        0)) AS `yes`,
    SUM(IF(`s2_cash_distribution_processq2_5_travel_more_than_1_hour` = 'no',
        1,
        0))  AS `no`
FROM
    impact_1.pdm;
