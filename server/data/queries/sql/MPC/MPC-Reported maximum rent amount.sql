SELECT DISTINCT
    `general_info/q3_province`
FROM
    impact_1.mpc;

SELECT 
    `general_info/q3_province` AS Province,
    MIN(`s1_full_market_survey/q1_17_2_room_cost_max`) AS `Reported maximum rent amount (AFN) minimum value`,
    MAX(`s1_full_market_survey/q1_17_2_room_cost_max`) AS `Reported maximum rent amount (AFN) maximum value`,
    AVG(`s1_full_market_survey/q1_17_2_room_cost_max`) AS `Reported maximum rent amount (AFN) average value`
FROM
    impact_1.mpc
WHERE
    `general_info/q3_province` = "Hilmand";
    
/*
	Should we calculate percentiles on DB level or on UI level ?
*/