SELECT 
    COUNT(`S2_AdditionalVulnerabilityq2_3_child_hdd`) AS Total,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_3_child_hdd` = 'yes',
        1,
        NULL)) AS `Child headed HH`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_3_child_hdd` = 'yes',
        1,
        NULL)) / COUNT(`S2_AdditionalVulnerabilityq2_3_child_hdd`) * 100 AS `Child headed Percentage`
FROM
    impact_1.heat;

