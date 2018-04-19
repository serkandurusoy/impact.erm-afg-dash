SELECT
    SUM(IF(`S1_headOfHouseholdq4_4_nid_numb` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `Head of Household With National ID`,
    SUM(IF(`S1_headOfHouseholdq4_4_nid_numb` = 'no',
        1,
        0)) / COUNT(*) * 100 AS `Head of Household Without National ID`
FROM
    impact_1.heat;
