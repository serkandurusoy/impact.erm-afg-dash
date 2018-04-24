SELECT
    `S3_GEN_ASSESSq3_4_1_if_no`,
    COUNT(`S3_GEN_ASSESSq3_4_1_if_no`) as `count`
FROM
    heat
GROUP BY `S3_GEN_ASSESSq3_4_1_if_no`;
