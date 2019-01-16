const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')

const {
  read: {
    getEpisode
  },
  update: {
    updateEpisode
  }
} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[POST]', () => {
    describe('/mangas/:name/:season/:episode', () => {
      it('Should update a manga', () => {
        chai.request(app).post('/api/mangas/No Game No Life/1/1').send({ grade: 9 }).then(async ({ status }) => {
          assert.equal(status, 200)
          assert.equal(await getEpisode('No Game No Life', 1, 1), JSON.stringify({ grade: 9 }))
          await updateEpisode('No Game No Life', 1, 1, { grade: 8 })
        })
      })
    })
  })
})
