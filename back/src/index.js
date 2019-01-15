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
server.get("/mangas", async function ({ params }, res) {
  const mangas = await read.getMangas()
  res.json(mangas)
})

/**
 * 
 */
server.get("/mangas/:name", async function ({ params }, res) {
  const seasons = await read.getSeasons(req.params.name)
  res.json(seasons)
})

server.get("/mangas/:name/:season", async function ({ params }, res) {

})

server.get("/mangas/:name/:season/:episode", async function ({ params }, res) {
  const episode = await read.getEpisode(params.name, params.season, params.episode)
  res.json(episode)
})

server.delete("/mangas/:name", async function (req, res) {
  
})

server.put("/mangas/:name/:season/:episode", async function (req, res) {
  
})

server.post("/mangas/:name/:season/:episode", async function (req, res) {
  
})