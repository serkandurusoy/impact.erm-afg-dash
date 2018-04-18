SELECT 
    `S5_FOOD_ASSESSq5_5_food_stocks`,
    COUNT( `S5_FOOD_ASSESSq5_5_food_stocks`)
FROM
    impact_1.heat
GROUP BY  `S5_FOOD_ASSESSq5_5_food_stocks`;
