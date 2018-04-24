SELECT
    `general_infoq1_province`,
    AVG(`FCS`) AS `avg_FCS`,
    SUM(IF(`FCS_Level` = 1, 1, 0)) AS `1`,
    SUM(IF(`FCS_Level` = 2, 1, 0)) AS `2`,
    SUM(IF(`FCS_Level` = 3, 1, 0)) AS `3`
FROM
    impact_1.pdm
GROUP BY `general_infoq1_province`;
