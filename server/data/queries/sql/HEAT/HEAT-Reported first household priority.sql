SELECT 
    `s8_prioritiesFirst`,
    COUNT(`s8_prioritiesFirst`)
FROM
    impact_1.heat
GROUP BY `s8_prioritiesFirst`;
