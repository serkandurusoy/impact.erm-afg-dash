SELECT 
    COUNT(`S2_AdditionalVulnerabilityq2_5_chronically`) AS Total,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_5_chronically` = 'yes',
        1,
        NULL)) AS `Chronically illed headed HH`,
    COUNT(IF(`S2_AdditionalVulnerabilityq2_5_chronically` = 'yes',
        1,
        NULL)) / COUNT(`S2_AdditionalVulnerabilityq2_5_chronically`) * 100 AS `Chronically illed Percentage`
FROM
    impact_1.heat;

