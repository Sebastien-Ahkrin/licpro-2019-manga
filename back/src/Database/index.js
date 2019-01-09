const { promisify } = require('util')
const fs = require('fs')

//Path of db folder
const path = __dirname + '/../../db'
const readFileAsync = promisify(fs.readFile)

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
 * Get the json of the episode
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 */
const getEpisode = (name, season, episode) => {
 return readFileAsync(`${path}/${ transform(name) }/Season-${ transform(season) }/Episode-${ transform(episode) }.json`, 'utf8').then(buffer => {
    return buffer
  }).catch(console.error)
}

module.exports = {
  transform,
  getEpisode
}