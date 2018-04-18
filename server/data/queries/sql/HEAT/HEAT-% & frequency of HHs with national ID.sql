SELECT 
    COUNT(IF(`S1_headOfHouseholdq4_4_nid_numb` = "yes", 1, NULL)) / COUNT(*) * 100 AS `Head of Household With National ID`,
    COUNT(IF(`S1_headOfHouseholdq4_4_nid_numb` = "no", 1, NULL)) / COUNT(*) * 100 AS `Head of Household Without National ID`
FROM
    impact_1.heat;