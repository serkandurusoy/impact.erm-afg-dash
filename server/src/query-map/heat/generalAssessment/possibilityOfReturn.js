export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(IF(\`S3_GEN_ASSESSq3_4_can_go_origin_place\` = 'yes',
        1,
        0)) \`yes\`,
    SUM(IF(\`S3_GEN_ASSESSq3_4_can_go_origin_place\` = 'no',
        1,
        0)) \`no\`
FROM
    heat;`);
  return results[0];
};
