SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_1_elderly_hdd`) AS `total`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_1_elderly_hdd` = 'yes',
        1,
        0)) AS `S2_AdditionalVulnerabilityq2_1_elderly_hdd`
FROM
    impact_1.heat;

