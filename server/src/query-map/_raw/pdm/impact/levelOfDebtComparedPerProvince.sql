SELECT
    `general_infoq1_province` AS Province,
    SUM(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'less',
        1,
        0)) AS `less`,
    SUM(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'more',
        1,
        0)) AS `more`,
    SUM(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'same',
        1,
        0)) AS `same`
FROM
    impact_1.pdm
GROUP BY `general_infoq1_province`;

