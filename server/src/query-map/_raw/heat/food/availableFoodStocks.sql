SELECT
    `S5_FOOD_ASSESSq5_5_food_stocks`,
    COUNT( `S5_FOOD_ASSESSq5_5_food_stocks`) as `count`
FROM
    heat
GROUP BY  `S5_FOOD_ASSESSq5_5_food_stocks`;
