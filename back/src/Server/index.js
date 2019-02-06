const express = require('express')
const router = express.Router()
const app = express()

const uuid = require('uuidv4')

const { listAll } = require('./../Database/crud/read')
const { deleteManga } = require('./../Database/crud/delete')
const { createManga } = require('./../Database/crud/create')

const port = process.env.PORT || 8080

app.listen(port, async () => {
  console.log(`\nServer listening on ${ port } \nhttp://localhost:${ port }`)
})

module.exports = {
  app, router
}