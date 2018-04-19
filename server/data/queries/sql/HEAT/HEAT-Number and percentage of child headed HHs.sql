SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_3_child_hdd`) AS Total,
    SUM(IF(`S2_AdditionalVulnerabilityq2_3_child_hdd` = 'yes',
        1,
        0)) AS `Child headed HH`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_3_child_hdd` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `Child headed Percentage`
FROM
    impact_1.heat;

