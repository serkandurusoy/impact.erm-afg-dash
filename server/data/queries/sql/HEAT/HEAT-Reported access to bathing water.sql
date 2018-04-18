SELECT 
    `general_infoq1_province`,
    COUNT(IF(`S6_washq6_1_bathing_water` = 'yes', 1, NULL)) as `Bathing Water Access`,
    COUNT(IF(`S6_washq6_1_bathing_water` = 'no', 1, NULL)) as `No Bathing Water Access`,
    COUNT(`S6_washq6_1_bathing_water`) as Total
FROM
    impact_1.heat
    GROUP BY general_infoq1_province;

