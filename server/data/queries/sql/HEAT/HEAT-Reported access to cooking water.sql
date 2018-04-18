SELECT 
    `general_infoq1_province`,
    COUNT(IF(`S6_washq6_1_cooking_water` = 'yes', 1, NULL)) as `Cooking Water Access`,
    COUNT(IF(`S6_washq6_1_cooking_water` = 'no', 1, NULL)) as `No Cooking Water Access`,
    COUNT(`S6_washq6_1_cooking_water`) as Total
FROM
    impact_1.heat
    GROUP BY general_infoq1_province;

