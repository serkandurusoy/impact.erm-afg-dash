import filterWhere from '../filterWhere';

export default async (
  database,
  { provinces, districts, dateBegin, dateEnd },
) => {
  const where = filterWhere(
    database,
    {
      provinces,
      districts,
      dateBegin,
      dateEnd,
    },
    `
      \`S5_FOOD_ASSESSq5_2_distance_marketmin\` IS NOT NULL AND
      \`S5_FOOD_ASSESSq5_2_distance_marketkm\` IS NOT NULL AND
    `,
  );

  const [results] = await database.raw(
    `
    SELECT
        \`general_infoq1_province\`,
        AVG(\`S5_FOOD_ASSESSq5_2_distance_marketmin\`) as \`S5_FOOD_ASSESSq5_2_distance_marketmin\`,
        AVG(\`S5_FOOD_ASSESSq5_2_distance_marketkm\`)  as \`S5_FOOD_ASSESSq5_2_distance_marketkm\`
    FROM
        heat
    ?
    GROUP BY \`general_infoq1_province\`
    ;`,
    [where],
  );

  return results;
};
