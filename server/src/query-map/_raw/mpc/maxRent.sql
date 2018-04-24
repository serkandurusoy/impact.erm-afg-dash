SELECT
    `general_info/q3_province`,
    MIN(`s1_full_market_survey/q1_17_2_room_cost_max`) AS `min_s1_full_market_survey/q1_17_2_room_cost_max`,
    MAX(`s1_full_market_survey/q1_17_2_room_cost_max`) AS `max_s1_full_market_survey/q1_17_2_room_cost_max`,
    AVG(`s1_full_market_survey/q1_17_2_room_cost_max`) AS `avg_s1_full_market_survey/q1_17_2_room_cost_max`
FROM
    mpc
GROUP BY `general_info/q3_province`;
