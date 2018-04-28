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
        \`S3_GEN_ASSESSq3_4_1_if_no\`,
        COUNT(\`S3_GEN_ASSESSq3_4_1_if_no\`) as \`count\`
    FROM
        heat
    :where
    GROUP BY
        \`S3_GEN_ASSESSq3_4_1_if_no\`
    ;`,
    { where },
  );

  return results;
};
