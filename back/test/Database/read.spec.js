const assert = require('assert')

const { 
  read: { 
    getEpisode, 
    getSeasons, 
    getMangas 
  }
} = require('../../src/Database')

describe('Database#read', () => {
  describe('getEpisode()', () => {
    it('should return the grade of a episode', async () => {
      assert.equal(await getEpisode('No Game No Life', 1, 1), "{\"grade\":8}")
    })
  })

  describe('getMangas()', async () => {
    it('should return the list of every mangas in array', async () => {
      assert.deepStrictEqual(await getMangas(), ['Goblin-Slayer', 'No-Game-No-Life', 'Shingeki-No-Kyojin'])
    })
  })

  describe('getSeasons()', () => {
    it('should return the list of every mangas in array', async () => {
      assert.deepStrictEqual(await getSeasons('Goblin Slayer'), ['Season-01'])
    })
  })
})