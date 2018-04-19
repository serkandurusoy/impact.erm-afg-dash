SELECT
    `general_infoq1_province`,
    SUM(IF(`S6_washq6_1_drinking_water` = 'yes',
        1,
        0)) AS `yes`,
    SUM(IF(`S6_washq6_1_drinking_water` = 'no',
        1,
        0)) AS `no`
FROM
    impact_1.heat
GROUP BY general_infoq1_province;

