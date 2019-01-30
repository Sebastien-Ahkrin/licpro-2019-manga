const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')
const uuid = require('uuidv4')

const {
  create: {
    createManga
  }
} = require('../../src/Database')

describe('Routes [/api]', () => {
  describe('[PUT]', () => {
    describe('/episodes/:uuid', () => {
      it('Should create a manga', async () => {
        const id = await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: uuid() })

        chai.request(app).put(`/api/episodes/${ id }`).send({ name: "Death Note", grade: 20, code: "S01E01", id }).then(async ({ body, status }) => {
          assert.equal(status, 200)
          assert.deepEqual(body, { name: "Death Note", grade: 20, code: "S01E01", id })
        })
      })
    })
  })
})
