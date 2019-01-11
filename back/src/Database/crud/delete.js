const { path, stringify, transform } = require('../util')

const { promisify } = require('util')
const rimraf = require('rimraf')

const unlink = promisify(rimraf)

/**
 * Delete a mangas with her name
 * @param { string } name 
 */
const deleteManga = name => unlink(`${ path }/${ transform(name) }`)

module.exports = {
  deleteManga
}