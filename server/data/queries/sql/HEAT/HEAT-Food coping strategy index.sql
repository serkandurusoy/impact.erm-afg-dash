SELECT 
    `general_infoq1_province` AS Province,
    AVG(`rCSI_newThreshold`) 
FROM
    impact_1.heat
GROUP BY `general_infoq1_province`;
    