SELECT 
    COUNT(IF(`S5_FOOD_ASSESSq5_1_access_market` = 'yes',
        1,
        NULL)) / COUNT(*) * 100 AS `% of with market access`,
    COUNT(IF(`S5_FOOD_ASSESSq5_1_access_market` = 'no',
        1,
        NULL)) / COUNT(*) * 100 AS `% of with no market access`
FROM
    impact_1.heat;

