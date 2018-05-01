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
        SUM(IF(\`S3_GEN_ASSESSq3_4_can_go_origin_place\` = 'yes', 1, 0)) \`yes\`,
        SUM(IF(\`S3_GEN_ASSESSq3_4_can_go_origin_place\` = 'no', 1, 0)) \`no\`,
        SUM(IF(\`S3_GEN_ASSESSq3_4_can_go_origin_place\` IS NULL, 1, 0)) \`N/A\`
    FROM
        heat
    :where
    ;`,
    { where },
  );

  return results[0];
};
