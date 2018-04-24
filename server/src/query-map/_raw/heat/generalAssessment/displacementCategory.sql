SELECT
    `S3_GEN_ASSESSq3_1_disp_categ`,
    COUNT(`S3_GEN_ASSESSq3_1_disp_categ`) as  `count`
FROM
    impact_1.heat
GROUP BY `S3_GEN_ASSESSq3_1_disp_categ`;

