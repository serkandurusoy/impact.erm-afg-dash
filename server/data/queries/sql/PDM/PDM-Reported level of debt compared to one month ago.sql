SELECT 
    COUNT(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'less',
        1,
        NULL)) / COUNT(*) * 100 AS `% of Less`,
    COUNT(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'more',
        1,
        NULL)) / COUNT(*) * 100 AS `% of More`,
    COUNT(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'same',
        1,
        NULL)) / COUNT(*) * 100 AS `% of Same`
FROM
    impact_1.pdm;
    