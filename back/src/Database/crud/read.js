const { path } = require('../util')

const { promisify } = require('util')
const fs = require('fs')

//Transform this method in a Promise
const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)

/* --------------------------------------------------------------*/
/**
 * Get all the episodes
 */
const listAll = () => readDirAsync(path)/*.forEach(file => {
  listOne(file)
})*/

/**
 * Get one episode
 * @param {*} id 
 */
const listOne = (id) => readFileAsync(`${ path }/${ id }.json`)


module.exports = {
  listAll, listOne
}