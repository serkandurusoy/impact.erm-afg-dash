
SELECT
    SUM(IF(`s2_cash_distribution_processq2_6_feel_unsafe_when_travelling` = 'yes',
        1,
        0)) AS `yes`,
    SUM(IF(`s2_cash_distribution_processq2_6_feel_unsafe_when_travelling` = 'no',
        1,
        0)) AS `no`
FROM
    impact_1.pdm