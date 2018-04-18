SELECT 
    COUNT(`S2_AdditionalVulnerabilityq2_2_female_hdd`) AS Total,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'yes',
        1,
        NULL)) AS `Female headed HH`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'no',
        1,
        NULL)) AS `Male headed HH`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'yes',
        1,
        NULL)) / COUNT(`S2_AdditionalVulnerabilityq2_2_female_hdd`) * 100 AS `Female headed Percentage`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'no',
        1,
        NULL)) / COUNT(`S2_AdditionalVulnerabilityq2_2_female_hdd`) * 100 AS `Male headed Percentage`
FROM
    impact_1.heat;

