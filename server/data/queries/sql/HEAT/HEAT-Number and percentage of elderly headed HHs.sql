SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_1_elderly_hdd`) AS Total,
    SUM(IF(`S2_AdditionalVulnerabilityq2_1_elderly_hdd` = 'yes',
        1,
        0)) AS `Elderly headed HH`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_1_elderly_hdd` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `Elderly headed Percentage`
FROM
    impact_1.heat;

