SELECT 
	`general_infoq1_province`,
    AVG(`S4_financial_ASSESSmale_breadwinner`) as `Number of male breadwinners in HH`,
    AVG(`S4_financial_ASSESSfemale_breadwinner`) as `Number of female breadwinners in HH`
FROM
    impact_1.heat
GROUP BY general_infoq1_province;