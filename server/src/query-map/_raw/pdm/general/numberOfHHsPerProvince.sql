SELECT
    `general_infoq1_province`, COUNT(*) AS `count`
FROM
    impact_1.pdm
GROUP BY `general_infoq1_province`;
