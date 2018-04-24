SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_4_physical`) AS `total`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_4_physical` = 'yes',
        1,
        0)) AS `S2_AdditionalVulnerabilityq2_4_physical`
FROM
    impact_1.heat;

