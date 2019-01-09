const { promisify } = require('util')
const fs = require('fs')

//Path of db folder
const path = `${ __dirname }/../../db`

//Transform this method in a Promise
const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)

/**
 * Remove every space and remplace it by a -. (if its a string)
 * If its a number just add "0" if the number is less than 10.
 * @param { string | number} value 
 */
const transform = value => ((typeof value === 'number') && (value <= 9) ? `0${ value }` : value.replace(/[ ]/g, '-'))

/**
 * Return every manga name in a Array
 */
const getMangas = async () => await readDirAsync(path)

/**
 * Return the list of all the seasons of a mangas name
 * @param { string } name 
 */
const getSeasons = name => readDirAsync(`${ path }/${ transform(name) }`)
/**
 * Get the json of the episode
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 */
const getEpisode = (name, season, episode) => readFileAsync(`${path}/${ transform(name) }/Season-${ transform(season) }/Episode-${ transform(episode) }.json`, 'utf8')

module.exports = {
  transform,
  getEpisode,
  getMangas,
  getSeasons
}