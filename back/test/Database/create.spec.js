const assert = require('assert')

const {
  read: {
    getEpisode
  },
  create: { 
    createManga 
  },
  deleteM: {
    deleteManga
  }
} = require('../../src/Database')

describe('Database#create', () => {
  describe('createManga()', () => {
    it('should create a new mangas with grade: 7', async () => {
      await createManga('Death Note', 1, 1, { grade: 7 })
      assert.equal(await getEpisode('Death Note', 1, 1), JSON.stringify({ grade: 7 }))
      await deleteManga('Death Note')
    })
  })
})