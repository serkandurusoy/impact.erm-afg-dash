SELECT 
    `general_info/q3_province`,
    AVG(`s1_full_market_survey/q1_10_current_price_wheat_flour`) AS `Average selling price of wheat flour`,
    AVG(`s1_full_market_survey/q1_10_1_current_price_rice`) AS `Average selling price of  rice`,
    AVG(`s1_full_market_survey/q1_10_2_current_price_oil`) AS `Average selling price of oil`,
    AVG(`s1_full_market_survey/q1_10_3_current_price_diesel`) AS `Average selling price of diesel`
FROM
    impact_1.mpc
GROUP BY `general_info/q3_province`
