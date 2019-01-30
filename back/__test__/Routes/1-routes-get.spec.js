const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')
const uuid = require('uuidv4')

const {
  read: {
    listAll,
    listOne
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

describe('Routes [/api]', () => { //important
  describe('[GET]', async () => { //important
    /*describe('/mangas', () => { // route testée
      it('Should return a list of mangas', () => { // desc
        chai.request(app).get('/api/mangas').then(({ status, body }) => {
          assert.equal(status, 200) // toujours tester le status
          assert.deepStrictEqual(body, [ 'Goblin-Slayer', 'No-Game-No-Life', 'Shingeki-No-Kyojin' ]) // deepStrictEqual pour les listes
        }) // deepEqual pour les objets
      })
    })*/

    /*const data = await listAll()
    data.forEach(async ep => await deleteManga(ep.replace('.json', '')))

    */

    /*before(async () => {
      const id1 = await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: uuid() })
      const id2 = await createManga({ name: "Death Note", grade: 8, code: "S01E02", id: uuid() })
    })

    after(async () => {
      const data = await listAll()
      data.forEach(async ep => await deleteManga(ep.replace('.json', '')))
    })*/

    describe('/episodes', () => {
      it('Should return a list of all the episodes details', () => {
        chai.request(app).get('/api/episodes').then(({ status, body }) => {
          //assert.equal(status, 200)
          console.log(body)
          //const ep1 = await listOne()
          //assert.deepStrictEqual()
        }).catch(error => console.log(error))
      })
    })
  
    /*describe('/mangas/:name', () => {
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
    })*/
  })
})