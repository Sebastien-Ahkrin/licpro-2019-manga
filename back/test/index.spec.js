const assert = require('assert')

const { transform, getEpisode, getMangas, getSeasons } = require('../src/Database')

describe('Database', () => {
  describe('#transform()', () => {
    it('should transform the number or string by a good prototype', () => {
      assert.equal(transform('No Game No Life'), 'No-Game-No-Life')
      assert.equal(transform(1), '01')
    })
  })

  describe('#getEpisode()', () => {
    it('should return the grade of a episode', async () => {
      assert.equal(await getEpisode('No Game No Life', 1, 1), "{\r\n  \"grade\": 8\r\n}")
    })
  })

  describe('#getMangas()', () => {
    it('should return the list of every mangas in array', async () => {
      assert.deepStrictEqual(await getMangas(), ['Goblin-Slayer', 'No-Game-No-Life'])
    })
  })

  describe('#getMangas()', () => {
    it('should return the list of every mangas in array', async () => {
      assert.deepStrictEqual(await getSeasons('Goblin Slayer'), ['Season-01'])
    })
  })
})