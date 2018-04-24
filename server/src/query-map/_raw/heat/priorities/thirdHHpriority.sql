SELECT
    `s8_prioritiesthird`,
    COUNT(`s8_prioritiesthird`) as `count`
FROM
    impact_1.heat
GROUP BY `s8_prioritiesthird`;
