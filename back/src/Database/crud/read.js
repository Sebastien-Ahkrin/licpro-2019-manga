const { path, stringify } = require('../util')

const { promisify } = require('util')
const fs = require('fs')

//Transform this method in a Promise
const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)


/**
 * Get all the episodes
 */
const listAll = () => readDirAsync(path)

/**
 * Get one episode
 * @param { string } id 
 */
const listOne = (id) => readFileAsync(stringify(id))


module.exports = {
  listAll, listOne
}