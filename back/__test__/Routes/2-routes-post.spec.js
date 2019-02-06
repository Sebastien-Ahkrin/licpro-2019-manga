const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')
const { read: { listOne, listAll }, deleteM: { deleteManga }} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[POST]', () => {

    after(async () => {
      const data = await listAll()
      data.forEach(async ep => await deleteManga(ep.replace('.json', '')))
    })

    describe('/episodes', () => {
      it('Should create a manga', (done) => {
        chai.request(app).post('/api/episodes').send({ name: "Death Note", grade: 8, code: "S01E01" }).then(async ({ status, body }) => {
          assert.equal(status, 201)
          const data = await listOne(body.id)
          assert.deepEqual(JSON.parse(data), body)
          done()
        }).catch(error => console.log(error))
      })
    })
  })
})