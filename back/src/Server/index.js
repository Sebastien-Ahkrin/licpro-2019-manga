const express = require('express')
const router = express.Router()
const app = express()

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listening on ${ port }`))

module.exports = {
  app, router
}