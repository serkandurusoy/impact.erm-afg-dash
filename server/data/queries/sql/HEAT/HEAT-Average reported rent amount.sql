SELECT 
    AVG(`S7_SHELTERq7_4_if_rented_amount`),
    MIN(`S7_SHELTERq7_4_if_rented_amount`),
    MAX(`S7_SHELTERq7_4_if_rented_amount`)
FROM
    impact_1.heat
WHERE `S7_SHELTERq7_4_if_rented_amount` != '';

/*
	!= To be replaced with N/A
*/
