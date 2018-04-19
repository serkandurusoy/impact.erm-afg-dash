SELECT
    SUM(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'no_some_needy_people_did_not_get_assistance',
        1,
        0)) / COUNT(*) * 100 AS `% of Some needy people did not get assistance`,
    SUM(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'no_some_richer_households_got_assistance',
        1,
        0)) / COUNT(*) * 100 AS `% of Some richer households  get assistance`,
    SUM(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'yes',
        1,
        0)) / COUNT(*) * 100 AS `% of Yes`
FROM
    impact_1.pdm;

/*
  Should we calculate percentile on DB level(how) or UI level
*/
