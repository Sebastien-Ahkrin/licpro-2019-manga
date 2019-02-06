const { path, stringify } = require('../util')

const { promisify } = require('util')
const rimraf = require('rimraf')

const unlink = promisify(rimraf)

/**
 * Delete a manga with his name
 * @param { string } uuid 
 */
const deleteManga = uuid => unlink(stringify(uuid))

module.exports = {
  deleteManga
}