const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')
const uuid = require('uuidv4')

const {
  read: {
    listAll
  },
  create: {
    createManga
  },
  deleteM: { 
    deleteManga
  }
} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[GET]', async () => {
    const id = uuid()
    const id2 = uuid()

    before(async () => {
      await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: id })
      await createManga({ name: "Death Note", grade: 7, code: "S01E02", id: id2 })
    })

    after(async () => {
      const data = await listAll()
      data.forEach(async ep => await deleteManga(ep.replace('.json', '')))
    })

    // Test ListAll()
    describe('/episodes', () => {
      it('Should return a list of the details of all the episodes', (done) => {
        chai.request(app).get('/api/episodes').then(({ status, body }) => {
          assert.equal(status, 200)
          assert.deepEqual(body.length, 2)
          done()
        }).catch(error => console.log(error))
      })
    })

    // Test ListOne()
    describe('/episodes/:uuid', () => {
      it('Should return the details of the episode in parameters', (done) => {
        chai.request(app).get(`/api/episodes/${ id }`).then(({ status, body }) => {
          assert.equal(status, 200)
          const data = { name: "Death Note", grade: 8, code: "S01E01", id: id }
          assert.deepEqual(body, data)
          done()
        }).catch(error => console.log(error))
      })
    })
  })
})