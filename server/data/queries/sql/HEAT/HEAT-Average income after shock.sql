SELECT 
	AVG(`S4_financial_ASSESSq4_4_income_after`) as `Average monthly HH income after the shock`,
    MIN(`S4_financial_ASSESSq4_4_income_after`) as `Min monthly HH income after the shock`,
    MAX(`S4_financial_ASSESSq4_4_income_after`) as `Max monthly HH income after the shock `
FROM
    impact_1.heat;
    
/*
	Percentile how to handle ?
*/