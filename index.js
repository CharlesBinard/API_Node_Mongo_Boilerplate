import nconf from 'nconf'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

nconf.argv().file({ file: `${__dirname}/config.json` })

const urlMongo = `mongodb://${nconf.get('mongo:url')}:${nconf.get(
    'mongo:port'
)}/${nconf.get('mongo:dataBase')}`

mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('error', (err) => {
    console.error(err)
    process.exit()
})

require('./src/server')
