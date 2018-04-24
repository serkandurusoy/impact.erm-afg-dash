SELECT
    `s8_prioritiesFirst`,
    COUNT(`s8_prioritiesFirst`) as `count`
FROM
    heat
GROUP BY `s8_prioritiesFirst`;
