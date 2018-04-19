SELECT
    `general_infoq1_province`,
    SUM(IF(`S6_washq6_1_cooking_water` = 'yes',
        1,
        0)) AS `Cooking Water Access`,
    SUM(IF(`S6_washq6_1_cooking_water` = 'no',
        1,
        0)) AS `No Cooking Water Access`,
    COUNT(`S6_washq6_1_cooking_water`) AS Total
FROM
    impact_1.heat
GROUP BY general_infoq1_province;

