SELECT
    `S7_SHELTERq7_1_accomodation`,
    SUM(IF(`S7_SHELTERq7_2_acc_arrangement` = 'Free_of_charge',
        1,
        0)) / COUNT(*) * 100 AS `% of Free of Charge`,
    SUM(IF(`S7_SHELTERq7_2_acc_arrangement` = 'Hosted',
        1,
        0)) / COUNT(*) * 100 AS `% of Hosted`,
    SUM(IF(`S7_SHELTERq7_2_acc_arrangement` = 'Rented',
        1,
        0)) / COUNT(*) * 100 AS `% of Rented`,
    SUM(IF(`S7_SHELTERq7_2_acc_arrangement` = 'Owned',
        1,
        0)) / COUNT(*) * 100 AS `Owned`,
    SUM(IF(`S7_SHELTERq7_2_acc_arrangement` = 'Squatting',
        1,
        0)) / COUNT(*) * 100 AS `Squatting`
FROM
    impact_1.heat
GROUP BY `S7_SHELTERq7_1_accomodation`;

