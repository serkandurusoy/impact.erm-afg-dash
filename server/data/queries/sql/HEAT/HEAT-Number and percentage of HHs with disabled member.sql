SELECT 
    COUNT(`S2_AdditionalVulnerabilityq2_4_physical`) AS Total,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_4_physical` = 'yes',
        1,
        NULL)) AS `Disable headed HH`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_4_physical` = 'yes',
        1,
        NULL)) / COUNT(`S2_AdditionalVulnerabilityq2_4_physical`) * 100 AS `Disabled headed Percentage`
FROM
    impact_1.heat;

