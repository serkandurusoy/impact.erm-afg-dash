SELECT 
    `general_infoq1_province` AS Province,
    AVG(`S5_FOOD_ASSESSq5_2_distance_marketmin`),
    AVG(`S5_FOOD_ASSESSq5_2_distance_marketkm`) 
FROM
    impact_1.heat
WHERE `S5_FOOD_ASSESSq5_2_distance_marketmin`!= 9999 AND `S5_FOOD_ASSESSq5_2_distance_marketkm` != 9999
GROUP BY `general_infoq1_province`;

/*
	Replace 9999 with IS NOT NULL
*/