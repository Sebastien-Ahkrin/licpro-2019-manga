const assert = require('assert')

const { 
  read: { 
    getEpisode, 
    getSeasons, 
    getMangas, 
    getEpisodes 
  }
} = require('../../src/Database')

describe('Database#read', () => {
  describe('getEpisode()', () => {
    it('should return the grade of a episode', async () => {
      assert.equal(await getEpisode('No Game No Life', 1, 1), "{\"grade\":8}")
    })
  })

  describe('getEpisodes()', () => {
    it('should return the list of every episodes from a manga and a season in array', async () => {
      assert.deepStrictEqual(await getEpisodes('Goblin-Slayer', 1), ['Episode-01.json', 'Episode-02.json'])
    })
  })

  describe('getMangas()', () => {
    it('should return the list of every mangas in array', async () => {
      assert.deepStrictEqual(await getMangas(), ['Goblin-Slayer', 'No-Game-No-Life', 'Shingeki-No-Kyojin'])
    })
  })

  describe('getSeasons()', () => {
    it('should return the list of every seasons from a manga in array', async () => {
      assert.deepStrictEqual(await getSeasons('Goblin Slayer'), ['Season-01'])
    })
  })
})