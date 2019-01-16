const server = require('../Server')

/**
 * Add a middleware to the server
 * Middleware is like this:
 * 
 * use((request, response, next) => {
 *   next()
 * })
 * 
 * @param { Function } middleware 
 */
const use = middleware => server.use(middleware)

/**
 * Add more of one middleware to the server
 * Middleware is like this:
 * 
 * const middlewares = [
 *   (request, response, next) => {
 *     next()
 *   }
 * ]
 * 
 * uses(middlewares)
 * 
 * @param { Array } middlewares 
 */
const uses = middlewares => middlewares.forEach(middleware => use(middleware))

module.exports = {
  use, uses
}