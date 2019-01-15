const server = require('./Server')

/*
[GET] /mangas => Donne tous les mangas
[GET] /mangas/:name => Donne toutes les saisons d'un mangas
[GET] /mangas/:name/:season => Donne la liste de tout les épisodes
[GET] /mangas/:name/:season/:episode => Donne la note d'un episode

[DELETE] /mangas/:name => Supprimer un mangas
[PUT] /mangas/:name/:season/:episode | DATA dans le header ? => Creer un mangas
[POST] /mangas/:name/:season/:episode | DATA dans le header ?  => Modifie un mangas
*/

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