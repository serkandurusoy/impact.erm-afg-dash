SELECT
    SUM(IF(`S6_washq6_5_latrine_available` = 'yes',
        1,
        0)) `yes`,
    SUM(IF(`S6_washq6_5_latrine_available` = 'no',
        1,
        0)) `no`
FROM
    heat;

