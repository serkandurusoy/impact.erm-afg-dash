SELECT
    `general_infoq1_province` AS Province,
    `FCS` AS `Food Consumption Score`,
    `FCS_Level` AS `Food Consumption Score Level`
FROM
    impact_1.pdm
WHERE
    `general_infoq1_province` = 'Kabul';

/*
  Province based or district based ?
*/

SELECT
    `general_infoq1_province` AS Province,
    AVG(`FCS`) AS `Average Food Consumption Score`,
    AVG(`FCS_Level`) AS `Average Food Consumption Score Level`
FROM
    impact_1.pdm
GROUP BY `general_infoq1_province`;
