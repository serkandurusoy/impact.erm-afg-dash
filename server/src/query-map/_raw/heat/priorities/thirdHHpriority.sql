SELECT
    `s8_prioritiesthird`,
    COUNT(`s8_prioritiesthird`) as `count`
FROM
    heat
GROUP BY `s8_prioritiesthird`;
