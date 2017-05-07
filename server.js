const express = require('express')
// create the app
const app = express()

// adds funationality to your app
app.use(express.static('public')) // will expose the folder 'public' to the web server

app.listen(3000, () => {
  console.log('Express server is running on port 3000')
})
