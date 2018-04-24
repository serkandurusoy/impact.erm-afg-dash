SELECT
    `s8_prioritiesSecond`,
    COUNT(`s8_prioritiesSecond`) as `count`
FROM
    heat
GROUP BY `s8_prioritiesSecond`;
