const express = require('express')
const router = express.Router()
const app = express()

const uuid = require('uuidv4')

const { listAll } = require('./../Database/crud/read')
const { deleteManga } = require('./../Database/crud/delete')
const { createManga } = require('./../Database/crud/create')

const port = process.env.PORT || 8080

app.listen(port, async () => {
  //console.log(`regenerate with [2] new data`)

  /*listAll().then(list => {
    list.forEach(async (episode) => await deleteManga(episode.replace('.json', '')))
  })*/

  //const a = await createManga({ name: "Death Note", grade: 10, code: "S01E01", id: uuid() })
  //const b = await createManga({ name: "Mirai Nikki", grade: 9, code: "S01E01", id: uuid() })

  //console.log(`[1]: { name: "Death Note", grade: 10, code: "S01E01", id: "${ a }"} [CREATED]`)
  //console.log(`[2]: { name: "Mirai Nikki", grade: 9, code: "S01E01", id: "${ b }"} [CREATED]`)
  console.log(`\nServer listening on ${ port } \nhttp://localhost:${ port }`)
})

module.exports = {
  app, router
}