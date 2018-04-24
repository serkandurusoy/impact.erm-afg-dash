SELECT
	`general_infoq1_province`,
    AVG(`S4_financial_ASSESSmale_breadwinner`) as `S4_financial_ASSESSmale_breadwinner`,
    AVG(`S4_financial_ASSESSfemale_breadwinner`) as `S4_financial_ASSESSfemale_breadwinner`
FROM
    impact_1.heat
GROUP BY general_infoq1_province;
