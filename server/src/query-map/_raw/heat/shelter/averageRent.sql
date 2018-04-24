SELECT
    AVG(`S7_SHELTERq7_4_if_rented_amount`) as `avg_S7_SHELTERq7_4_if_rented_amount`,
    MIN(`S7_SHELTERq7_4_if_rented_amount`) as `min_S7_SHELTERq7_4_if_rented_amount`,
    MAX(`S7_SHELTERq7_4_if_rented_amount`) as `max_S7_SHELTERq7_4_if_rented_amount`
FROM
    heat
WHERE `S7_SHELTERq7_4_if_rented_amount` != '';

/*
	!= To be replaced with N/A
*/
