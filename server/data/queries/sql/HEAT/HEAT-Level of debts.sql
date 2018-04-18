SELECT 
	`S4_financial_ASSESSq4_5_new_debts`,
    COUNT(`S4_financial_ASSESSq4_5_new_debts`)
FROM
    impact_1.heat
GROUP BY `S4_financial_ASSESSq4_5_new_debts`;