const env = {
  NO_CACHE: 'false',
  TZ: 'Etc/UTC',
  IMPACT_VERSION: '2.1.0',
  PORT: 8002,
  NODE_ENV: 'production',
  MYSQL_HOST: 'localhost',
  MYSQL_PORT: 3306,
  MYSQL_USER: 'impact',
  MYSQL_PASSWORD: 'impact',
  MYSQL_DATABASE: 'impact',
};

module.exports = {
  apps: [
    {
      name: 'impact',
      script: './IMPACT/server/dist/index.js',
      env,
      env_production: env,
    },
  ],
};
