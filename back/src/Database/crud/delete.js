const { path, stringify } = require('../util')

const { promisify } = require('util')
const rimraf = require('rimraf')

const unlink = promisify(rimraf)

/**
 * Delete a mangas with her name
 * @param { string } uuid 
 */
const deleteManga = uuid => unlink(stringify(uuid))

module.exports = {
  deleteManga
}