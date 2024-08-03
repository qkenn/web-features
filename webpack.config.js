const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// default env
process.env.NODE_ENV
  ? (process.env.NODE_ENV = process.env.NODE_ENV)
  : (process.env.NODE_ENV = 'production');

const commonConfig = {
  entry: {
    app: './src/main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

if (process.env.NODE_ENV == 'development') {
  module.exports = {
    ...commonConfig,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      watchFiles: ['./src/index.html'],
      hot: true,
    },
  };
}

if (process.env.NODE_ENV == 'production') {
  module.exports = {
    ...commonConfig,
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimize: true,
    },
  };
}
