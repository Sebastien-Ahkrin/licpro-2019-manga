const assert = require('assert')

const {
  read: {
    getMangas
  },
  create: {
    createManga
  },
  deleteM: { 
    deleteManga
  } 
} = require('../../src/Database')

describe('Database#delete', () => {
  describe('deleteManga()', () => {
    it('should delete a mangas', async () => {
      await createManga('Death Note', 1, 1, { grades: 7 })
      await deleteManga('Death Note')
      assert.deepStrictEqual(await getMangas(), ['Goblin-Slayer', 'No-Game-No-Life', 'Shingeki-No-Kyojin'])
    })
  })
})