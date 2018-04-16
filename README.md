## Impact / REACH
### Afghanistan Emergency Response Mechanism Dashboard
Web application for visualizing data aggregations built on top of available ERM data.

Consists of a client web application build on top of React.js and D3.js and a server
side Node.js based REST api, connecting to a MySQL database.

#### Requirements
- Node 8.11.1
- Npm 5.8.0
- Yarn 1.6.0
- Docker 18.x (_development only_)
- Docker compose 1.21.x (_development only_)
- MySQL 5.7.21 (_production only_)
- PM2 (_production only_)
- NGINX 1.12.x (_production only_)

Run `yarn install` prior to development and follow the scripts in `package.json`,
namely `yarn start` to bootstrap the database, server and client applications in
development mode.

