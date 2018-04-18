SELECT 
    `s8_prioritiesthird`,
    COUNT(`s8_prioritiesthird`)
FROM
    impact_1.heat
GROUP BY `s8_prioritiesthird`;
