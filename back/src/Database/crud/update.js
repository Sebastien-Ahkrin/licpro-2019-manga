const { stringify } = require('../util')

const { promisify } = require('util')
const fs = require('fs')

//Transform this method in a Promise
const createFile = promisify(fs.writeFile)

/**
 * Update an episode with the new data
 * @param { string } uuid 
 * @param { object } data 
 */
const updateEpisode = async (uuid, data) => await createFile(stringify(uuid), JSON.stringify(data))

module.exports = {
  updateEpisode
}