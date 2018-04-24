export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`S3_GEN_ASSESSq3_2_1_province_origin\`,
    COUNT(\`S3_GEN_ASSESSq3_2_1_province_origin\`) \`count\`
FROM
    heat
GROUP BY \`S3_GEN_ASSESSq3_2_1_province_origin\`;`);
  return results;
};
