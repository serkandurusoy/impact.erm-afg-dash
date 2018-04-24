SELECT
    `general_infoq1_province`,
    COUNT(`S1_headOfHouseholdtotal_mem`) as `count`,
    SUM(`S1_headOfHouseholdtotal_mem`) as `sum`
FROM
    impact_1.heat
GROUP BY `general_infoq1_province`;
