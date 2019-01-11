const { getMangas, getSeasons, getEpisode } = require('./crud/read')
const { createManga } = require('./crud/create')
const { deleteManga } = require('./crud/delete')
const { updateEpisode } = require('./crud/update')

module.exports = {
  read: { 
    getEpisode, 
    getMangas, 
    getSeasons 
  },
  create: {
    createManga
  },
  delete: {
    deleteManga
  },
  update: {
    updateEpisode
  }
}