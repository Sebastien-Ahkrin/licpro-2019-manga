const assert = require('assert')

const chai = require('chai')
const http = require('chai-http')
chai.use(http)

const { app } = require('../../src')
const uuid = require('uuidv4')

const { read: { listAll }, create: { createManga }, deleteM: { deleteManga } } = require('../../src/Database')
describe('Routes [/api]', () => {
  describe('[PUT]', () => {
    const id = uuid()

    before(async () => {
      await createManga({ name: "Death Note", grade: 8, code: "S01E01", id: id })
    })

    after(async () => {
      const data = await listAll()
      data.forEach(async ep => await deleteManga(ep.replace('.json', '')))
    })

    describe('/episodes/:uuid', () => {
      it('Should create a manga', (done) => {
        chai.request(app).put(`/api/episodes/${ id }`).send({ name: "Death Note", grade: 20, code: "S01E01", id }).then(({ body, status }) => {
            assert.equal(status, 200)
            assert.deepEqual(body, { name: "Death Note", grade: 20, code: "S01E01", id })
            done()
          }).catch(error => console.log(error)) 
        }
      )
    })
  })
})
