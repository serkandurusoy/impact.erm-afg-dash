SELECT
    SUM(IF(`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd` = 'no_it_created_problems',
        1,
        0)) / COUNT(*) * 100 AS ` % of Created Problems`,
    SUM(IF(`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd` = 'no_it_did_not_make_a_difference',
        1,
        0)) / COUNT(*) * 100 AS ` % of Didn't  Make a Difference`,
    SUM(IF(`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd` = 'yes_improved_a_little',
        1,
        0)) / COUNT(*) * 100 AS ` % of Improved a Little`,
    SUM(IF(`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd` = 'yes_improved_a_lot',
        1,
        0)) / COUNT(*) * 100 AS ` % of Improved a Lot`
FROM
    impact_1.pdm;
