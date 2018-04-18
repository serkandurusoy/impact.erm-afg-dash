SELECT 
    `general_infoq1_province` AS Province,
    AVG(`S4_financial_ASSESSq4_4_income_after`) AS `Average monthly HH income after the shock`,
    MIN(`S4_financial_ASSESSq4_4_income_after`) AS `Min monthly HH income after the shock`,
    MAX(`S4_financial_ASSESSq4_4_income_after`) AS `Max monthly HH income after the shock `
FROM
    impact_1.heat
GROUP BY `general_infoq1_province`;
    