SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_2_female_hdd`) AS Total,
    SUM(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'yes',
        1,
        0)) AS `Female headed HH`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'no',
        1,
        0)) AS `Male headed HH`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `Female headed Percentage`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_2_female_hdd` = 'no',
        1,
        0)) / COUNT(*) * 100 AS `Male headed Percentage`
FROM
    impact_1.heat;

