SELECT
    SUM(IF(`S5_FOOD_ASSESSq5_1_access_market` = 'yes',
        1,
        0)) `yes`,
    SUM(IF(`S5_FOOD_ASSESSq5_1_access_market` = 'no',
        1,
        0)) `no`
FROM
    heat;

