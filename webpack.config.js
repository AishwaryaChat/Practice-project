/* we use the webpack file so that we can use babel and react */

module.exports = {
  entry: './public/app.js', // entry point for rendering
  output: {               // to provide the output to be saved i.e the bundle.js file
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'] // list of file extensions that we want to process
  }
}
