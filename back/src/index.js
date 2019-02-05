const { app } = require('./Server')
const { api } = require('./Routes')

app.use('/api', api)

module.exports = { app }