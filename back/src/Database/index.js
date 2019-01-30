const { listAll, listOne } = require('./crud/read')
const { createManga } = require('./crud/create')
const { deleteManga } = require('./crud/delete')
const { updateEpisode } = require('./crud/update')

module.exports = {
  read: { 
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