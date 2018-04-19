SELECT
    `general_infoq5_organization`,
    COUNT(`S1_headOfHouseholdtotal_mem`) as `count`,
    SUM(`S1_headOfHouseholdtotal_mem`) as `sum`
FROM
    impact_1.heat
GROUP BY `general_infoq5_organization`;
