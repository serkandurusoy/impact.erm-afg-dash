SELECT
    COUNT(`S2_AdditionalVulnerabilityq2_5_chronically`) `total`,
    SUM(IF(`S2_AdditionalVulnerabilityq2_5_chronically` = 'yes',
        1,
        0)) AS `S2_AdditionalVulnerabilityq2_5_chronically`
FROM
    heat;

