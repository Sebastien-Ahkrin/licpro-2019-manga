const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')

const {
  read: {
    getEpisode
  },
  deleteM: {
    deleteManga
  }
} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[PUT]', () => {
    describe('/mangas/:name/:season/:episode', () => {
      it('Should create a manga', () => {
        chai.request(app).put('/api/mangas/Death Note/1/1').send({ grade: 5 }).then(async ({ status }) => {
          assert.equal(status, 200)
          assert.equal(await getEpisode('Death Note', 1, 1), JSON.stringify({ grade: 5 }))
          await deleteManga('Death Note')
        })
      })
    })
  })
})
