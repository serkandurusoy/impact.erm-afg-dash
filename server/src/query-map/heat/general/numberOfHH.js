import PROVINCE_INFO from '../../../../../client/src/constants/province-info';

export default async (
  database,
  { provinces, districts, dateBegin, dateEnd },
) => {
  const where = database.raw(
    `
      WHERE
        \`general_infoq1_province\` ? (?) AND
        \`general_infoq2_district\` ? (?) AND
        \`today\` between ? and ?
    `,
    [
      provinces ? database.raw('in') : database.raw('not in'),
      provinces
        ? provinces.map(
            p => PROVINCE_INFO.find(({ id }) => id === parseInt(p, 10)).name,
          )
        : [''],
      districts ? database.raw('in') : database.raw('not in'),
      districts || [''],
      new Date(dateBegin),
      new Date(dateEnd),
    ],
  );

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

  const [results] = await query;

  return results;
};
