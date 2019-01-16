const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')

describe('Routes [/api]', () => {
  describe('[GET] /mangas', () => {
    it('Should return a list of mangas', () => {
      chai.request(app).get('/api/mangas').then((response) => {
        assert.equal(response.status, 200)
        assert.deepStrictEqual(response.body, [ 'Goblin-Slayer', 'No-Game-No-Life', 'Shingeki-No-Kyojin' ])
      })
    })
  })
})