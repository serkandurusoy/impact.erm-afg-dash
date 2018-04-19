SELECT
    SUM(IF(`S1_headOfHouseholdq4_4_nid_numb` = 'yes',
        1,
        0)) `yes`,
    SUM(IF(`S1_headOfHouseholdq4_4_nid_numb` = 'no',
        1,
        0)) `no`
FROM
    impact_1.heat;
