const assert = require('assert')

const uuid = require('uuidv4')
const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')
const { create: { createManga }} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[DELETE]', () => {
    describe('/episodes/:uuid', () => {
      it('Should remove a manga', async () => {
        const id = await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: uuid() })
        chai.request(app).delete(`/api/episodes/${ id }`).then(async ({ status, body }) => {
          assert.equal(status, 200)
          assert.deepEqual(body, { id, status: 'deleted' })
        })
      })
    })
  })
})