import PROVINCE_INFO from '../../../../../client/src/constants/province-info';

export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const where = database.raw(`WHERE \`general_infoq1_province\` in (?)`, [
    (provinces &&
      provinces.map(
        p => PROVINCE_INFO.find(({ id }) => id === parseInt(p, 10)).name,
      )) ||
      PROVINCE_INFO.map(p => p.name),
  ]);

  const query = database.raw(
    `
  SELECT
      \`general_infoq5_organization\`,
      COUNT(\`S1_headOfHouseholdtotal_mem\`) as \`count\`,
      SUM(\`S1_headOfHouseholdtotal_mem\`) as \`sum\`
  FROM
      heat
  ?
  GROUP BY \`general_infoq5_organization\`;
`,
    [where],
  );

  console.log(111, query.toString());

  const [results] = await query;

  return results;
};
