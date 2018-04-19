SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_2_female_hdd`) AS `total`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'yes',
        1,
        0)) AS `S2_AdditionalVulnerabilityq2_2_female_hdd`
FROM
    impact_1.heat;

