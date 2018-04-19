SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_4_physical`) AS Total,
    SUM(IF(`S2_AdditionalVulnerabilityq2_4_physical` = 'yes',
        1,
        0)) AS `Disable headed HH`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_4_physical` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `Disabled headed Percentage`
FROM
    impact_1.heat;

