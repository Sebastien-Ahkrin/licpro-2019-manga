const server = require('./Server')

/**
 *
 */
server.post("/episodes", function(req, res) {

})

/**
 *
 */
server.get("/episodes", function(req, res) {

})

/**
 *
 */
server.get("/episodes/:id", function(req, res) {
    console.log(req.params.id)
})

/**
 *
 */
server.put("/episodes/:id", function(req, res) {

})

/**
 *
 */
server.delete("/episode/:id", function (req, res) {

})