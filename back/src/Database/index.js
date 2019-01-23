const { getMangas, getSeasons, getEpisode, getEpisodes } = require('./crud/read')
const { createManga } = require('./crud/create')
const { deleteManga } = require('./crud/delete')
const { updateEpisode } = require('./crud/update')

/*-----------*/
const { listAll, listOne } = require('./crud/read')

module.exports = {
  read: { 
    getEpisode, 
    getMangas, 
    getSeasons, 
    getEpisodes,
    /*---------*/
    listAll, listOne
  },
  create: {
    createManga
  },
  deleteM: {
    deleteManga
  },
  update: {
    updateEpisode
  }
}