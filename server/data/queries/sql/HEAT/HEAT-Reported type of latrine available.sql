SELECT 
    `S6_washq6_6_latrine_type`,
    COUNT(`S6_washq6_6_latrine_type`) as `Latrine Availability`
FROM
    impact_1.heat
    GROUP BY `S6_washq6_6_latrine_type`;

