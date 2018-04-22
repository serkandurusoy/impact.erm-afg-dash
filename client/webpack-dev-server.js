const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  historyApiFallback: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  proxy: {
    '/api': 'http://localhost:8002',
  },
});

server.listen(8001, 'localhost', () => {});
