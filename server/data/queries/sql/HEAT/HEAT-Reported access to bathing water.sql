SELECT
    `general_infoq1_province`,
    SUM(IF(`S6_washq6_1_bathing_water` = 'yes',
        1,
        0)) AS `Bathing Water Access`,
    SUM(IF(`S6_washq6_1_bathing_water` = 'no',
        1,
        0)) AS `No Bathing Water Access`,
    COUNT(`S6_washq6_1_bathing_water`) AS Total
FROM
    impact_1.heat
GROUP BY general_infoq1_province;

