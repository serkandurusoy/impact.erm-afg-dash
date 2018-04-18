SELECT 
    COUNT(`S2_AdditionalVulnerabilityq2_1_elderly_hdd`) AS Total,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_1_elderly_hdd` = 'yes',
        1,
        NULL)) AS `Elderly headed HH`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_1_elderly_hdd` = 'yes',
        1,
        NULL)) / COUNT(`S2_AdditionalVulnerabilityq2_1_elderly_hdd`) * 100 AS `Elderly headed Percentage`
FROM
    impact_1.heat;

