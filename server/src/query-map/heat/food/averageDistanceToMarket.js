export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_infoq1_province\`,
    AVG(\`S5_FOOD_ASSESSq5_2_distance_marketmin\`) as \`S5_FOOD_ASSESSq5_2_distance_marketmin\`,
    AVG(\`S5_FOOD_ASSESSq5_2_distance_marketkm\`)  as \`S5_FOOD_ASSESSq5_2_distance_marketkm\`
FROM
    heat
WHERE \`S5_FOOD_ASSESSq5_2_distance_marketmin\`!= 9999 AND \`S5_FOOD_ASSESSq5_2_distance_marketkm\` != 9999
/*
WHERE \`S5_FOOD_ASSESSq5_2_distance_marketmin\`IS NOT NULL
AND \`S5_FOOD_ASSESSq5_2_distance_marketkm\` IS NOT NULL
*/
GROUP BY \`general_infoq1_province\`;`);
  return results;
};
