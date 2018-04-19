const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { API_URL, NODE_ENV } = process.env;

const DEVELOPMENT = NODE_ENV === 'development';
const PRODUCTION = NODE_ENV === 'production';

const entryProd = {
  index: ['./src/index.js'],
};

const entryDev = {
  index: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8001',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
};

const entry = PRODUCTION ? entryProd : entryDev;

const plugins = PRODUCTION
  ? [new webpack.optimize.ModuleConcatenationPlugin()]
  : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
    API_URL,
  }),
);

plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html',
  }),
);

plugins.push(
  new FaviconsWebpackPlugin({
    logo: path.join(__dirname, 'favicon.png'),
    background: '#ED4E4E',
    title: 'Afghanistan Emergency Response Mechanism Dashboard',
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  }),
);

plugins.push(
  new MiniCssExtractPlugin({
    filename: 'index-[contenthash].css',
    chunkFilename: '[name]-[contenthash].css',
  }),
);

module.exports = {
  mode: NODE_ENV,
  devtool: PRODUCTION ? false : 'cheap-module-eval-source-map',
  entry,
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: DEVELOPMENT,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(js)$/,
        loaders: ['babel-loader'],
        exclude: '/node_modules/',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.(css)$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, '../prototype/dist'),
        ],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff)$/,
        loaders: ['file-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, '../prototype/dist'),
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index-[hash].js',
    chunkFilename: '[name]-[contenthash].js',
  },
};
