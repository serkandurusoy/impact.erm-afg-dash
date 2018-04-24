SELECT
    `general_infoq5_organization`,
    COUNT(*) AS `count`
FROM
    pdm
GROUP BY `general_infoq5_organization`;
