
SELECT 
    COUNT(IF(`s2_cash_distribution_processq2_6_feel_unsafe_when_travelling` = 'yes',
        1,
        NULL)) / COUNT(*) * 100 AS `% of Yes`,
    COUNT(IF(`s2_cash_distribution_processq2_6_feel_unsafe_when_travelling` = 'no',
        1,
        NULL)) / COUNT(*) * 100 AS `% of No`
FROM
    impact_1.pdm