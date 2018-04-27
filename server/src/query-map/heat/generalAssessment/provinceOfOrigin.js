import filterWhere from '../filterWhere';

export default async (
  database,
  { provinces, districts, dateBegin, dateEnd },
) => {
  const where = filterWhere(database, {
    provinces,
    districts,
    dateBegin,
    dateEnd,
  });

  const [results] = await database.raw(
    `
    SELECT
        \`S3_GEN_ASSESSq3_2_1_province_origin\`,
        COUNT(\`S3_GEN_ASSESSq3_2_1_province_origin\`) \`count\`
    FROM
        heat
    ?
    GROUP BY \`S3_GEN_ASSESSq3_2_1_province_origin\`
    ;`,
    [where],
  );

  return results;
};
