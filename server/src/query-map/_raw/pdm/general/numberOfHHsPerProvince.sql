SELECT
    `general_infoq1_province`, COUNT(*) AS `count`
FROM
    pdm
GROUP BY `general_infoq1_province`;
