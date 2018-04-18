SELECT 
    `general_infoq1_province`,
    COUNT(`S1_headOfHouseholdtotal_mem`) as `Number of  Household Interviewed`,
    SUM(`S1_headOfHouseholdtotal_mem`) as `Number of  Individuals`
FROM
    impact_1.heat
GROUP BY `general_infoq1_province`;
