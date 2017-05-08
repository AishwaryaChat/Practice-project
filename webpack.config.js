/* we use the webpack file so that we can use babel and react */

module.exports = {
  entry: './public/app.jsx', // entry point for rendering
  output: {               // to provide the output to be saved i.e the bundle.js file
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'] // list of file extensions that we want to process
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // to handle jsx files, to parse them through react and es6
                                // and get the output and run them through es2015
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/, // regular expression to run this loader only on .jsx files.
        exclude: /(node_modules|bower_components)/ // folders which we do not want to parse
      }
    ]
  }
}
