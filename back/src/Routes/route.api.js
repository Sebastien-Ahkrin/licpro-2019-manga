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
    response.send(body).status(201)
  } catch (error) {
    response.send(`Error: ${ error }`).status(500)
  }
})

//Delete a episode
router.delete('/episodes/:uuid', async ({ params }, response) => {
  try {
    await deleteManga(params.uuid)
    response.send({ id: params.uuid, status: 'deleted' }).status(200)
  } catch (error) {
    response.send(`Error: ${ error }`).status(500)
  }
})

//Update a episode
router.put('/episodes/:uuid', ({ params }, response) => {

})

module.exports = router