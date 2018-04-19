SELECT
    `general_infoq1_province` AS Province,
    AVG(`FCS`) AS `Average Food Consumption Score`,
    SUM(IF(`FCS_Level` = 1, 1, 0)) / COUNT(*) * 100 AS `% of Poor food consumption`,
    SUM(IF(`FCS_Level` = 2, 1, 0)) / COUNT(*) * 100 AS `% of Borderline food consumption`,
    SUM(IF(`FCS_Level` = 3, 1, 0)) / COUNT(*) * 100 AS `% of Acceptabel food consumption`
FROM
    impact_1.pdm
GROUP BY `general_infoq1_province`;
