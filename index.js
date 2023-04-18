const app = require('./script/server')
const router = require('./script/router')

app.use('/', router)