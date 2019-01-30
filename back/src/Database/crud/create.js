const { path, stringify } = require('../util')

const { promisify } = require('util')
const fs = require('fs')

//Transform this method in a Promise
const createFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)

/**
 * Create a file with this object : 
 * 
 * { 
 *   "name": { string },
 *   "grade": { number },
 *   "code": { string }
 * }
 * 
 * @param { object } data
 */
const createManga = async (data) => {
  await mkdir(path, { recursive: true })
  await createFile(stringify(data.id), JSON.stringify(data))
  return data.id
}

module.exports = {
  createManga
}