SELECT
    `general_infoq1_province`,
    AVG(`S4_financial_ASSESSq4_4_income_after`) AS `avg_S4_financial_ASSESSq4_4_income_after`,
    MIN(`S4_financial_ASSESSq4_4_income_after`) AS `min_S4_financial_ASSESSq4_4_income_after`,
    MAX(`S4_financial_ASSESSq4_4_income_after`) AS `max_S4_financial_ASSESSq4_4_income_after`
FROM
    heat
GROUP BY `general_infoq1_province`;
