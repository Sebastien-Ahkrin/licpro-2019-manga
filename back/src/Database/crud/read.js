const { stringify, transform, path } = require('../util')

const { promisify } = require('util')
const fs = require('fs')

//Transform this method in a Promise
const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)

/**
 * Return every manga name in a Array
 */
const getMangas = () => readDirAsync(path)

/**
 * Return the list of all the seasons of a mangas name
 * @param { string } name 
 */
const getSeasons = name => readDirAsync(`${ path }/${ transform(name) }`)

//TODO getEpisodes qui donne la liste de tout les épisodes

/**
 * Get the json of the episode
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 */
const getEpisode = (name, season, episode) => readFileAsync(stringify(name, season, episode), 'utf8')

module.exports = {
  getMangas, getEpisode, getSeasons
}