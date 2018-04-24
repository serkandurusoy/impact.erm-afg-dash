SELECT
    SUM(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'no_some_needy_people_did_not_get_assistance',
        1,
        0)) AS `no_some_needy_people_did_not_get_assistance`,
    SUM(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'no_some_richer_households_got_assistance',
        1,
        0)) AS `no_some_richer_households_got_assistance`,
    SUM(IF(`s2_cash_distribution_processq2_1_do_u_think_gave_right_people` = 'yes',
        1,
        0)) AS `yes`
FROM
    pdm;

