const csvParse = require('csv-parse');
const fs = require('fs');
const path = require('path');

const knex = require('knex');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const getDatabaseConnection = async () => {
  try {
    const mysqlConnection = await knex({
      client: 'mysql',
      connection: {
        host: MYSQL_HOST,
        port: parseInt(MYSQL_PORT, 10),
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
      },
      pool: {
        min: 0,
        max: 10,
      },
    });

    if (!mysqlConnection)
      throw new Error('could not verify database connections');

    return mysqlConnection;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('DATABASE CONNECTION ERROR', JSON.stringify(error));
    return undefined;
  }
};

const insertInto = (database, record) =>
  database.insert(
    Object.entries(record)
      .map(([n, v]) => ({
        [n]: v === '' ? null : v,
      }))
      .reduce((obj, v) => ({ ...obj, ...v }), {}),
  );

const parse = async () => {
  console.log('\n\n==================================\n\n');
  console.log('PLEASE WAIT UNTIL THE SCRIPT COMPLETES\n\n');
  console.log('\n\n----------------------------------\n\n');

  const db = await getDatabaseConnection();

  const parser = table =>
    csvParse({ columns: true }, (e, d) => {
      d.forEach((r, i) =>
        insertInto(db, r)
          .into(table)
          .catch(({ sqlMessage: error }) => {
            // eslint-disable-next-line prettier/prettier
            console.log(`\n\nERROR: Table ${table} in row ${i} of ${d.length} has ${error}\n\nWill try again...\n\n`);
            insertInto(db, r)
              .into(table)
              .catch(({ code, sqlMessage }) =>
                console.log(
                  '\n=== ERROR =======================\n',
                  {
                    error: { code, sqlMessage },
                    at: `Table ${table} in row ${i} of ${d.length}`,
                    record: r,
                  },
                  '\n---------------------------------\n',
                ),
              );
          }),
      );
    });

  fs
    .createReadStream(path.resolve(__dirname, './heat.csv'))
    .pipe(parser('heat'));

  fs.createReadStream(path.resolve(__dirname, './mpc.csv')).pipe(parser('mpc'));

  fs.createReadStream(path.resolve(__dirname, './pdm.csv')).pipe(parser('pdm'));
};

parse();
