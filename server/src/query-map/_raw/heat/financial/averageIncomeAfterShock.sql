SELECT
	AVG(`S4_financial_ASSESSq4_4_income_after`) as `avg_S4_financial_ASSESSq4_4_income_after`,
    MIN(`S4_financial_ASSESSq4_4_income_after`) as `min_S4_financial_ASSESSq4_4_income_after`,
    MAX(`S4_financial_ASSESSq4_4_income_after`) as `max_S4_financial_ASSESSq4_4_income_after`
FROM
    heat;

/*
	Percentile how to handle ?
*/
