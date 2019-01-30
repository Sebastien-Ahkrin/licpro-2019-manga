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
    let id1
    let id2

    before(async () => {
      id1 = await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: uuid() })
      id2 = await createManga({ name: "Death Note", grade: 8, code: "S01E02", id: uuid() })
    })

    after(async () => {
      const data = await listAll()
      data.forEach(async ep => await deleteManga(ep.replace('.json', '')))
    })

    describe('/episodes', () => {
      it('Should return a list of the details of all the episodes', () => {
        chai.request(app).get('/api/episodes').then(async ({ status, body }) => {
          assert.equal(status, 200)
          const data = [{ name: "Death Note", grade: 8, code: "S01E01", id: id1 }, { name: "Death Note", grade: 8, code: "S01E02", id: id2 }]
          assert.deepStrictEqual(body, data)
        }).catch(error => console.log(error))
      })
    })

    describe('/episodes/:uuid', () => {
      it('Should return the details of the episode in parameters', () => {
        chai.request(app).get(`/api/episodes/${ id1 }`).then(async ({ status, body }) => {
          assert.equal(status, 200)
          const data = { name: "Death Note", grade: 8, code: "S01E01", id: id1 }
          assert.deepEqual(body, data)
        }).catch(error => console.log(error))
      })
    })
  })
})