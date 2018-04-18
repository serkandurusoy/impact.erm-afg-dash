SELECT 
    AVG(`s2_cash_distribution_processq2_3_how_mach_cash`) AS `Average reported amount of cash assistance received`,
	MIN(`s2_cash_distribution_processq2_3_how_mach_cash`) AS `Min reported amount of cash assistance received`,
    MAX(`s2_cash_distribution_processq2_3_how_mach_cash`) AS `Max reported amount of cash assistance received`
FROM
    impact_1.pdm;