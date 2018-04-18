SELECT 
    `general_infoq1_province`,
    COUNT(IF(`S6_washq6_1_drinking_water` = 'yes', 1, NULL)) as `Water Access`,
    COUNT(IF(`S6_washq6_1_drinking_water` = 'no', 1, NULL)) as `No Water Access`,
    COUNT(`S6_washq6_1_drinking_water`) as Total
FROM
    impact_1.heat
    GROUP BY general_infoq1_province;

