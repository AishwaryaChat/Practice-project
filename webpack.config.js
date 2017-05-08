/* we use the webpack file so that we can use babel and react */

module.exports = {
  entry: './public/app.jsx', // entry point for rendering
  output: {               // to provide the output to be saved i.e the bundle.js file
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    // speifies the absolute path of each file in the project, which will help in not specifying the path again
    // and agin when requiring the particular file
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx'
    },
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
