const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/main.jsx',
    './src/main.css',
  ], output: {
    filename: './dist/app.js',
    path: path.resolve(__dirname, ''),
  }, resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      _src: path.resolve(__dirname),
    }
  }, module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'app.css',
              outputPath: './dist'
            }
          }, {
            loader: 'extract-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }
        ],
      },
    ]
  }
};
