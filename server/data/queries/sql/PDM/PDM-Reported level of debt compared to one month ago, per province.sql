SELECT 
    `general_infoq1_province` AS Province,
    COUNT(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'less',
        1,
        NULL)) / COUNT(*) * 100 AS `% less than a month ago`,
    COUNT(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'more',
        1,
        NULL)) / COUNT(*) * 100 AS `% more than a month ago`,
    COUNT(IF(`s5_multi_sector_outcome_indexq5_4_debt_compared` = 'same',
        1,
        NULL)) / COUNT(*) * 100 AS `% same as a month ago`
FROM
    impact_1.pdm
GROUP BY `general_infoq1_province`;
    
/*
	a Province can have different values
*/
    