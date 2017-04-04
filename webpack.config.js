const config = {
  target: 'node',
  entry: {
    'index': './index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: { loader: 'ignore-loader' }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'targets': {
                  'node': 'current'
                }
              }]
            ]
          }
        }
      }
    ]
  }
}

export default [config]
