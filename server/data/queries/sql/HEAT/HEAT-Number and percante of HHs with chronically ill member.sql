SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_5_chronically`) AS Total,
    SUM(IF(`S2_AdditionalVulnerabilityq2_5_chronically` = 'yes',
        1,
        0)) AS `Chronically illed headed HH`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_5_chronically` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `Chronically illed Percentage`
FROM
    impact_1.heat;

