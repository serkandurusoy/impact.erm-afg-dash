SELECT
    SUM(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'less',
        1,
        0)) / COUNT(*) * 100 AS `% of Less`,
    SUM(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'more',
        1,
        0)) / COUNT(*) * 100 AS `% of More`,
    SUM(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'same',
        1,
        0)) / COUNT(*) * 100 AS `% of Same`
FROM
    impact_1.pdm;
