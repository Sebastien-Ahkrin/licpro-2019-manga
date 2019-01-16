const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')

const {
  read: {
    getMangas,
    getEpisode
  },
  create: {
    createManga
  },
  deleteM: { 
    deleteManga
  },
  update: {
    updateEpisode
  }
} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[GET]', () => {
    describe('/mangas', () => {
      it('Should return a list of mangas', () => {
        chai.request(app).get('/api/mangas').then(({ status, body }) => {
          assert.equal(status, 200)
          assert.deepStrictEqual(body, [ 'Goblin-Slayer', 'No-Game-No-Life', 'Shingeki-No-Kyojin' ])
        })
      })
    })
  
    describe('/mangas/:name', () => {
      it('Should return a list of seasons', () => {
        chai.request(app).get('/api/mangas/No Game No Life').then(({ status, body }) => {
          assert.equal(status, 200)
          assert.deepStrictEqual(body, [ 'Season-01' ])
        })
      })
    })
  
    describe('/mangas/:name/:season', () => {
      it('Should return a list of episodes', () => {
        chai.request(app).get('/api/mangas/No Game No Life/1').then(({ status, body }) => {
          assert.equal(status, 200)
          assert.deepStrictEqual(body, [ 'Episode-01.json' ])
        })
      })
    })
  
    describe('/mangas/:name/:season/:episode', () => {
      it('Should return a episode 1', () => {
        chai.request(app).get('/api/mangas/No Game No Life/1/1').then(({ status, body }) => {
          assert.equal(status, 200)
          assert.equal(body, JSON.stringify({ grade: 8 }))
        })
      })
    })
  })
})