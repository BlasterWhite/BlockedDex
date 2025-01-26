const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for optimized builds
  entry: {
    background: './src/browsers/chrome/background.ts',
    content: './src/common/js/content.ts',
    popup: './src/common/js/popup.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/chrome'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
