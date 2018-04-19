SELECT
    `S3_GEN_ASSESSq3_2_1_province_origin`,
    COUNT(`S3_GEN_ASSESSq3_2_1_province_origin`) `count`
FROM
    impact_1.heat
GROUP BY `S3_GEN_ASSESSq3_2_1_province_origin`;
