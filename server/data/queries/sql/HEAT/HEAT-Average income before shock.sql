SELECT 
	AVG(`S4_financial_ASSESSq4_3_income_before`) as `Average monthly HH income before the shock`,
    MIN(`S4_financial_ASSESSq4_3_income_before`) as `Min monthly HH income before the shock`,
    MAX(`S4_financial_ASSESSq4_3_income_before`) as `Max monthly HH income before the shock `
FROM
    impact_1.heat;
    
/*
	Percentile how to handle ?
*/