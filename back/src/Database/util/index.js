//Path of db folder
const path = `${ __dirname }/../../../__test__/data`

/**
 * Return a new string from this uuid
 * @param { number } uuid
 */
const stringify = uuid => `${ path }/${ uuid }.json`

module.exports = {
  stringify, path
}