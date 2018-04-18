SELECT 
    SUM(`S1_headOfHouseholdnew_born_male`) / (SUM(`S1_headOfHouseholdnew_born_male`) + SUM(`S1_headOfHouseholdnew_born_female`)) * 100 AS `% of of Newborn male`,
    SUM(`S1_headOfHouseholdnew_born_female`) / (SUM(`S1_headOfHouseholdnew_born_male`) + SUM(`S1_headOfHouseholdnew_born_female`)) * 100 AS `% of of Newborn female`,
    SUM(`S1_headOfHouseholdchildren_6_18_male`) / (SUM(`S1_headOfHouseholdchildren_6_18_female`) + SUM(`S1_headOfHouseholdchildren_6_18_male`)) * 100 AS `% of male ages 6-18`,
    SUM(`S1_headOfHouseholdchildren_6_18_female`) / (SUM(`S1_headOfHouseholdchildren_6_18_female`) + SUM(`S1_headOfHouseholdchildren_6_18_male`)) * 100 AS `% of female ages 6-18`,
    SUM(`S1_headOfHouseholdadult_19_59_male`) / (SUM(`S1_headOfHouseholdadult_19_59_male`) + SUM(`S1_headOfHouseholdadult_19_59_female`)) * 100 AS `% of male ages 19-59`,
    SUM(`S1_headOfHouseholdadult_19_59_female`) / (SUM(`S1_headOfHouseholdadult_19_59_male`) + SUM(`S1_headOfHouseholdadult_19_59_female`)) * 100 AS `% of female ages 19-59`,
    SUM(`S1_headOfHouseholdelders_60_abv_male`) / (SUM(`S1_headOfHouseholdelders_60_abv_male`) + SUM(`S1_headOfHouseholdelders_60_abv_female`)) * 100 AS `% of male above 60`,
    SUM(`S1_headOfHouseholdelders_60_abv_female`) / (SUM(`S1_headOfHouseholdelders_60_abv_male`) + SUM(`S1_headOfHouseholdelders_60_abv_female`)) * 100 AS `% of female above 60`
FROM
    impact_1.heat;
