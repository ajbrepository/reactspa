module.exports = {
    entry: [
      './src/index.jsx'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
        {
          test: /\.css$/, loader: "style-loader!css-loader"
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
  };
    //To Run Webpack Directly
    //node ./node_modules/webpack/bin/webpack.js