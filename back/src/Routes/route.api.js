const { 
  read: { listOne, listAll }, 
  create: { createManga }, 
  deleteM: { deleteManga },
  update: { updateEpisode }
} = require('../Database')

const { router, app } = require('../Server')
const bodyParser = require('body-parser')
const uuid = require('uuidv4')

app.use(bodyParser.json())

//ListAll
router.get('/episodes', (request, response) => {

})

//ListOne
router.get('/episodes/:uuid', ({ params }, response) => {

})

//Create a episode
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