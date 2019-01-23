const { read, create, deleteM, update} = require('../Database')
const { router, app } = require('../Server')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
 * Get all the mangas
 */
router.get("/mangas", (_, res) => {
  read.getMangas().then(mangas => {
    res.json({
      mangas: mangas.map(e => e.replace(/[-]/g, ' ')),
      next: '/mangas/:name'
    })
  }).catch(error => {
    res.send(error).status(404)
  })
})

/**
 * Get all the seasons from a manga name
 */
router.get("/mangas/:name", ({ params }, res) => {
  read.getSeasons(params.name).then(seasons => {
    res.json({
      seasons: seasons.map(e => e.replace(/[-]/g, ' ')),
      next: '/mangas/:name/:season'
    })
  }).catch(error => {
    res.send(error).status(404)
  })
})

/**
 * Get all the episodes from a manga name and a season
 */
router.get("/mangas/:name/:season", ({ params }, res) => {
  read.getEpisodes(params.name, params.season).then(episodes => {
    res.json({
      episodes: episodes.map(e => e.replace(/[-]/g, ' ')),
      next: '/mangas/:name/:season/:episode'
    })
  }).catch(error => {
    res.send({ error }).status(404)
  })
})

/**
 * Get the episode from a manga name, a season and an episode number
 */
router.get("/mangas/:name/:season/:episode", ({ params }, res) => {
  read.getEpisode(params.name, params.season, params.episode).then(episode => {
    res.json(JSON.parse(episode))
  }).catch(error => {
    res.send(error).status(404)
  })
})

/**
 * Delete a manga from its name
 */
router.delete("/mangas/:name", ({ params }, res) => {
  deleteM.deleteManga(params.name).then(_ => {
    res.sendStatus(200)
  }).catch(error => {
    res.send(error).status
  })
})

/**
 * Create a manga from its name, season and episode
 */
router.put("/mangas/:name/:season/:episode", ({ params, body }, res) => {
  create.createManga(params.name, params.season, params.episode, body).then(async (_) => {
    res.json(JSON.parse(await read.getEpisode(params.name, params.season, params.episode)))
  }).catch(error => {
    res.send(error).status(404)
  })
})

/**
 * Update a manga from its name, season and episode
 */
router.post("/mangas/:name/:season/:episode", ({ params, body }, res) => {
  update.updateEpisode(params.name, params.season, params.episode, body).then(_ => {
    res.json(JSON.parse(read.getEpisode(params.name, params.season, params.episode)))
  }).catch(error => {
    res.send(error).status(404)
  })
})

/*--------------------------*/
router.get("/episodes", (_, res) => {
  read.listAll().then(mangas => {
    res.json({
      mangas
    })
  }).catch(error => {
    res.send(error).status(404)
  })
})

module.exports = router