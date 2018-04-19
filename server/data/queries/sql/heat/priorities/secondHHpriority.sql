SELECT
    `s8_prioritiesSecond`,
    COUNT(`s8_prioritiesSecond`) as `count`
FROM
    impact_1.heat
GROUP BY `s8_prioritiesSecond`;
