SELECT distinct `s2_cash_distribution_processq2_1_do_u_think_gave_right_people` from impact_1.pdm;

SELECT 
    COUNT(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'no_some_needy_people_did_not_get_assistance',
        1,
        NULL)) / COUNT(*) * 100 AS `% of Some needy people did not get assistance`,
    COUNT(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'no_some_richer_households_got_assistance',
        1,
        NULL)) / COUNT(*) * 100 AS `% of Some richer households  get assistance`,
    COUNT(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'yes',
        1,
        NULL)) / COUNT(*) * 100 AS `% of Yes`
FROM
    impact_1.pdm;