const { promisify } = require('util')
const fs = require('fs')

//Path of db folder
const path = `${ __dirname }/../../db`

//Transform this method in a Promise
const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)
const createFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)

/**
 * Return a new string from this 3 strings
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 */
const stringify = (name, season, episode) => `${ path }/${ transform(name) }/Season-${ transform(season) }/Episode-${ transform(episode) }.json`

/**
 * Remove every space and remplace it by a -. (if its a string)
 * If its a number just add "0" if the number is less than 10.
 * @param { string | number } value 
 */
const transform = value => ((typeof value === 'number') && (value <= 9) ? `0${ value }` : value.replace(/[ ]/g, '-'))

/**
 * Return every manga name in a Array
 */
const getMangas = () => readDirAsync(path)

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
const getEpisode = (name, season, episode) => readFileAsync(stringify(name, season, episode), 'utf8')

/**
 * Create a file with this object : { grade: x }
 * x = number
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 * @param { object } data 
 */
const createManga = async (name, season, episode, data) => {
  await mkdir(`${ path }/${ transform(name) }/Season-${ transform(season) }`, { recursive: true })
  await createFile(stringify(name, season, episode), JSON.stringify(data)).catch(console.error)
}


module.exports = {
  read: { 
    getEpisode, 
    getMangas, 
    getSeasons 
  },
  create: {
    createManga
  }
}