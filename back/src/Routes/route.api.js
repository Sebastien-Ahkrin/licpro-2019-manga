const { read, create, deleteM, update} = require('../Database')
const { router, app } = require('../Server')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
 * Get all the mangas
 */
router.get("/mangas", async function (_, res) {
  const mangas = await read.getMangas()
  res.json(mangas)
})

/**
 * Get all the seasons from a manga name
 */
router.get("/mangas/:name", async function ({ params }, res) {
  const seasons = await read.getSeasons(params.name)
  res.json(seasons)
})

/**
 * Get all the episodes from a manga name and a season
 */
router.get("/mangas/:name/:season", async function ({ params }, res) {
  const episodes = await read.getEpisodes(params.name, params.season)
  res.json(episodes)
})

/**
 * Get the episode from a manga name, a season and an episode number
 */
router.get("/mangas/:name/:season/:episode", async function ({ params }, res) {
  const episode = await read.getEpisode(params.name, params.season, params.episode)
  res.json(episode)
})

/**
 * Delete a manga from its name
 */
router.delete("/mangas/:name", async function ({ params }, res) {
  await deleteM.deleteManga(params.name)
  res.sendStatus(200)
})

/**
 * Create a manga from its name, season and episode
 */
router.put("/mangas/:name/:season/:episode", async function ({ params, body }, res) {
  await create.createManga(params.name, params.season, params.episode, body)
  res.sendStatus(200)
})

/**
 * Update a manga from its name, season and episode
 */
router.post("/mangas/:name/:season/:episode", async function ({ params, body }, res) {
  await update.updateEpisode(params.name, params.season, params.episode, body)
  res.sendStatus(200)
})

module.exports = router