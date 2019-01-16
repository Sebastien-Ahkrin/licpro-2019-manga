const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')

const {
  read: {
    getMangas
  },
  create: {
    createManga
  }
} = require('../../src/Database')

describe('[DELETE]', () => {
  describe('/mangas/:name', () => {
    it('Should remove a manga', () => {
      chai.request(app).delete('/api/mangas/No Game No Life').then(async ({ status }) => {
        assert.equal(status, 200)
        assert.deepStrictEqual(await getMangas(), ['Death-Note', 'Goblin-Slayer', 'Shingeki-No-Kyojin' ])
        await createManga('No Game No Life', 1, 1, { grade: 8 })
      })
    })
  })
})