import csvParse from 'csv-parse';
import fs from 'fs';
import path from 'path';

import knex from 'knex';

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

const db = getDatabaseConnection();

const parser = table =>
  csvParse({ columns: true }, (e, d) => {
    d.forEach(r =>
      db
        .insert(
          Object.entries(r)
            .map(([n, v]) => ({
              [n]: v === '' ? null : v,
            }))
            .reduce((obj, v) => ({ ...obj, ...v }), {}),
        )
        .into(table)
        .catch(() =>
          db
            .insert(
              Object.entries(r)
                .map(([n, v]) => ({
                  [n]: v === '' ? null : v,
                }))
                .reduce((obj, v) => ({ ...obj, ...v }), {}),
            )
            .into(table),
        ),
    );
  });

fs
  .createReadStream(
    path.resolve(__dirname, './HEAT-fulldata_JAN_17042018_for-web.csv'),
  )
  .pipe(parser('heat'));

fs
  .createReadStream(
    path.resolve(__dirname, './All_MPC_RAW_17042018_for-web.csv'),
  )
  .pipe(parser('mpc'));

fs
  .createReadStream(
    path.resolve(__dirname, './PDM_Fulldata_JAN_17042018_for-web.csv'),
  )
  .pipe(parser('pdm'));
