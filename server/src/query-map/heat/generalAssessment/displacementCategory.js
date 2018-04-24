export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`S3_GEN_ASSESSq3_1_disp_categ\`,
    COUNT(\`S3_GEN_ASSESSq3_1_disp_categ\`) as  \`count\`
FROM
    heat
GROUP BY \`S3_GEN_ASSESSq3_1_disp_categ\`;`);
  return results;
};
