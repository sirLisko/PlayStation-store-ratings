module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }]
  },
  output: {
    filename: './chrome-extension/base.js'
  }
}
