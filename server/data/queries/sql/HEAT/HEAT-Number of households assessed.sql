SELECT 
    `general_infoq5_organization` as `Partner Organization`,
    COUNT(`S1_headOfHouseholdtotal_mem`) as `Number of  Household Interviewed`,
    SUM(`S1_headOfHouseholdtotal_mem`) as `Number of  Individuals`
FROM
    impact_1.heat
GROUP BY `general_infoq5_organization`;
