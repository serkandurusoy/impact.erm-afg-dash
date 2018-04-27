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
        \`S3_GEN_ASSESSq3_1_disp_categ\`,
        COUNT(\`S3_GEN_ASSESSq3_1_disp_categ\`) as  \`count\`
    FROM
        heat
    :where
    GROUP BY
        \`S3_GEN_ASSESSq3_1_disp_categ\`
    ;`,
    { where },
  );

  return results;
};
