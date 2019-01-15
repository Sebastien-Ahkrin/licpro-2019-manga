const { stringify, transform, path } = require('../util')

const { promisify } = require('util')
const fs = require('fs-extra')

//Transform this method in a Promise
const createFile = promisify(fs.writeFile)
const mkdir = promisify(fs.ensureDir)

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
  await createFile(stringify(name, season, episode), JSON.stringify(data))
}

const test = path => {
  return new Promise((resolve, reject) => {
    console.log(path)
  })
}

module.exports = {
  createManga
}