const server = require('./Server')
const { read, create, deleteM, update} = require('./Database')

/*
[GET] /mangas => Donne tous les mangas
[GET] /mangas/:name => Donne toutes les saisons d'un mangas
[GET] /mangas/:name/:season => Donne la liste de tout les épisodes
[GET] /mangas/:name/:season/:episode => Donne la note d'un episode

[DELETE] /mangas/:name => Supprimer un mangas
[PUT] /mangas/:name/:season/:episode | DATA dans le header ? => Creer un mangas
[POST] /mangas/:name/:season/:episode | DATA dans le header ?  => Modifie un mangas
*/

/**
 * Get all the mangas
 */
server.get("/mangas", async function (_, res) {
  const mangas = await read.getMangas()
  res.json(mangas)
})

/**
 * Get all the seasons from a manga name
 */
server.get("/mangas/:name", async function ({ params }, res) {
  const seasons = await read.getSeasons(params.name)
  res.json(seasons)
})

/**
 * Get all the episodes from a manga name and a season
 */
server.get("/mangas/:name/:season", async function ({ params }, res) {
  const episodes = await read.getEpisodes(params.name, params.season)
  res.json(episodes)
})

/**
 * Get the episode from a manga name, a season and an episode number
 */
server.get("/mangas/:name/:season/:episode", async function ({ params }, res) {
  const episode = await read.getEpisode(params.name, params.season, params.episode)
  res.json(episode)
})

/**
 * Delete a manga from its name
 */
server.delete("/mangas/:name", async function ({ params }, _) {
  await deleteM.deleteManga(params.name)
})

/**
 * Create a manga from its name, season and episode
 */
server.put("/mangas/:name/:season/:episode", async function ({ params }, _) {
  await create.createManga(params.name, params.season, params.episode)
})

/**
 * Update a manga from its name, season and episode
 */
server.post("/mangas/:name/:season/:episode", async function ({params }, _) {
  await update.updateEpisode(params.name, params.season, params.episode)
})