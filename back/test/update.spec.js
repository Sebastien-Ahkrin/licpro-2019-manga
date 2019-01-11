const assert = require('assert')

const {
  read: {
    getEpisode
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
} = require('../src/Database')

describe('Database#update', () => {
  describe('updateEpisode()', () => {
    it('should update a mangas with grade: 8', async () => {
      await createManga('Death Note', 1, 1, { grade: 7 })
      await updateEpisode('Death Note', 1, 1, { grade: 8 })
      assert.equal(await getEpisode('Death Note', 1, 1), JSON.stringify({ grade: 8 }))
      await deleteManga('Death Note')
    })
  })
})