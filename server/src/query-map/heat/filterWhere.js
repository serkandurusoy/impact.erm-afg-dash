import PROVINCE_INFO from '../../constants/province-info';

export default (
  database,
  { provinces, districts, dateBegin, dateEnd },
  firstWhere = [''],
) =>
  database.raw(
    `
      WHERE
        ?
        \`general_infoq1_province\` ? (?) AND
        \`general_infoq2_district\` ? (?) AND
        \`today\` between ? and ?
    `,
    [
      database.raw(firstWhere),
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
