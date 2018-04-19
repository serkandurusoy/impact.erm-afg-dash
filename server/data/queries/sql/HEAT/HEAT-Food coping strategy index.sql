SELECT
    `general_infoq1_province` AS Province,
    AVG(`rCSI_newThreshold`) AS `Average Reduced Coping Strategy Index`,
    SUM(IF(`rCSI_newThreshold` = 1, 1, 0)) / COUNT(*) * 100 AS `% of High`,
    SUM(IF(`rCSI_newThreshold` = 2, 1, 0)) / COUNT(*) * 100 AS `% of Medium`,
    SUM(IF(`rCSI_newThreshold` = 3, 1, 0)) / COUNT(*) * 100 AS `% of No or low`
FROM
    impact_1.heat
GROUP BY `general_infoq1_province`;
