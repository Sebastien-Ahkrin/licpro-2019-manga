const { getMangas, getSeasons, getEpisode, getEpisodes } = require('./crud/read')
const { createManga } = require('./crud/create')
const { deleteManga } = require('./crud/delete')
const { updateEpisode } = require('./crud/update')

module.exports = {
  read: { 
    getEpisode, 
    getMangas, 
    getSeasons, 
    getEpisodes
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