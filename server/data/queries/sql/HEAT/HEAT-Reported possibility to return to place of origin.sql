SELECT
    SUM(IF(`S3_GEN_ASSESSq3_4_can_go_origin_place` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `% of possibility of return`,
    SUM(IF(`S3_GEN_ASSESSq3_4_can_go_origin_place` = 'no',
        1,
        0)) / COUNT(*) * 100 AS `% of possibility of no return`
FROM
    impact_1.heat;

