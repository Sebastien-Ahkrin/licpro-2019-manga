const { 
  read: { listOne, listAll }, 
  create: { createManga }, 
  deleteM: { deleteManga },
  update: { updateEpisode }
} = require('../Database')

const { router, app } = require('../Server')
const bodyParser = require('body-parser')
const uuid = require('uuidv4')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

//ListAll
router.get('/episodes', async (_, response) => {
  try {
    const list = await listAll()
    const data = list.map(async ep => await listOne(ep.replace(".json", "")))
    response.json((await Promise.all(data)).map(episode => JSON.parse(episode)))
  } catch (error) {
    response.status(500).send(`Error: ${ error }`)
  }
})

//ListOne
router.get('/episodes/:uuid', async ({ params }, response) => {
  try {
    response.json(JSON.parse(await listOne(params.uuid)))
  } catch (error) {
    response.status(500).send(`Error: ${ error }`)
  }
})

//Create an episode
router.post('/episodes', async ({ body }, response) => {
  body.id = uuid()
  try {
    await createManga(body)
    response.status(201).json(body)
  } catch (error) {
    response.status(500).send(`Error: ${ error }`)
  }
})

//Delete a episode
router.delete('/episodes/:uuid', async ({ params }, response) => {
  try {
    await deleteManga(params.uuid)
    response.status(200).send({ id: params.uuid, status: 'deleted' })
  } catch (error) {
    response.status(500).send(`Error: ${ error }`)
  }
})

//Update a episode
router.put('/episodes/:uuid', async ({ params, body }, response) => {
  try {
    await updateEpisode(params.uuid, body)
    const data = JSON.parse(await listOne(params.uuid))
    data.id = params.uuid

    response.status(200).json(data)
  } catch (error) {
    response.status(500).send(`Error: ${ error }`)
  }
})

module.exports = router