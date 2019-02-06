const { app } = require('../../src')
const { create: { createManga }, read: { listAll }, deleteM: { deleteManga }} = require('../../src/Database')

const assert = require('assert')
const uuid = require('uuidv4')
const chai = require('chai')
const http = require('chai-http')
chai.use(http)

describe('Routes [/api]', () => {
  describe('[DELETE]', () => {
    const id = uuid()

    before(async () => {
      await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: id })
    })

    after(async () => {
      const data = await listAll()
      data.forEach(async ep => await deleteManga(ep.replace('.json', '')))
    })

    describe('/episodes/:uuid', () => {
      it('Should remove a manga', (done) => {
        chai.request(app).delete(`/api/episodes/${ id }`).then(({ status, body }) => {
          assert.equal(status, 200)
          assert.deepEqual(body, { id, status: 'deleted' })
          done()
        }).catch(error => console.log(error))
      })
    })
  })
})