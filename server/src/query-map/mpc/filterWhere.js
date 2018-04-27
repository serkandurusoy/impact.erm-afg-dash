import PROVINCE_INFO from '../../constants/province-info';

export default (database, { provinces, districts, dateBegin, dateEnd }) =>
  database.raw(
    `
      WHERE
        \`general_info/q3_province\` ? (?) AND
        \`general_info/q4_district\` ? (?) AND
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
