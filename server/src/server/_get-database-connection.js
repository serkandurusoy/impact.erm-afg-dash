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

export default getDatabaseConnection;
