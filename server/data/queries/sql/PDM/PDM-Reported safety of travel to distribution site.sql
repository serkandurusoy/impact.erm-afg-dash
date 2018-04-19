
SELECT
    SUM(IF(`s2_cash_distribution_processq2_6_feel_unsafe_when_travelling` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `% of Yes`,
    SUM(IF(`s2_cash_distribution_processq2_6_feel_unsafe_when_travelling` = 'no',
        1,
        0)) / COUNT(*) * 100 AS `% of No`
FROM
    impact_1.pdm
