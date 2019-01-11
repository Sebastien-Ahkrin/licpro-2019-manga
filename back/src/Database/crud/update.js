const { stringify } = require('../util')

const { promisify } = require('util')
const fs = require('fs')

//Transform this method in a Promise
const createFile = promisify(fs.writeFile)

/**
 * Update a episode with the new data
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 * @param { object } data 
 */
const updateEpisode = async (name, season, episode, data) => await createFile(stringify(name, season, episode), JSON.stringify(data))

module.exports = {
  updateEpisode
}