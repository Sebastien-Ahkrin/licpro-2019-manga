const { promisify } = require('util')
const fs = require('fs')

//Path of db folder
const path = __dirname + '/../../db'

//Transform this method in a Promise
const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)

/**
 * Remove every space and remplace it by a -. (if its a string)
 * If its a number just add "0" if the number is less than 10.
 * @param { string || number} value 
 */
const transform = value => {
  if((typeof value === 'number') && (value <= 9)) {
    value = `0${value}`
  } else {
    value = value.replace(/[ ]/g, '-')
  }
  return value
}

/**
 * Return every manga name in a Array
 */
const getMangas = () => {
  return readDirAsync(`${ path }`).catch(error => {
    console.error(`An error occured here #getMangas():  ${ error }`)
    Promise.reject(error)
  })
}

/**
 * Return the list of all the seasons of a mangas name
 * @param { string } name 
 */
const getSeasons = name => {
  return readDirAsync(`${ path }/${ transform(name) }`).catch(error => {
    console.error(`An error occured here #getSeasons():  ${ error }`)
    Promise.reject(error)
  })
}

/**
 * Get the json of the episode
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 */
const getEpisode = (name, season, episode) => {
 return readFileAsync(`${path}/${ transform(name) }/Season-${ transform(season) }/Episode-${ transform(episode) }.json`, 'utf8').then(buffer => {
    return buffer
  }).catch(error => {
    console.error(`An error occured here #getEpisode():  ${ error }`)
    Promise.reject(error)
  })
}

module.exports = {
  transform,
  getEpisode,
  getMangas,
  getSeasons
}