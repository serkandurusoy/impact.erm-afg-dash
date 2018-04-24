SELECT
    `S6_washq6_6_latrine_type`,
    COUNT(`S6_washq6_6_latrine_type`) as `count`
FROM
    heat
    GROUP BY `S6_washq6_6_latrine_type`;

