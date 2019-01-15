//Path of db folder
const path = `${ __dirname }/../../../db`

/**
 * Return a new string from this 3 strings
 * @param { string } name 
 * @param { number } season 
 * @param { number } episode 
 */
const stringify = (name, season, episode) => {

console.log('test', transform(name), transform(season), transform(episode))

  console.log(`${ path }/${ transform(name) }/Season-${ transform(season) }/Episode-${ transform(episode) }.json`)
  return `${ path }/${ transform(name) }/Season-${ transform(season) }/Episode-${ transform(episode) }.json`
}
/**
 * Remove every space and remplace it by a -. (if its a string)
 * If its a number just add "0" if the number is less than 10.
 * @param { string | number } value 
 */
const transform = value => ((typeof parseInt(value, 10) === 'number') && (value <= 9) ? `0${ value }` : value.replace(/[ ]/g, '-'))


console.log(stringify('Salut a', 1, 1))

module.exports = {
  transform, stringify, path
}