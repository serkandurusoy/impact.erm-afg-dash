SELECT
    `general_infoq5_organization`,
    COUNT(*) AS `count`
FROM
    impact_1.pdm
GROUP BY `general_infoq5_organization`;
