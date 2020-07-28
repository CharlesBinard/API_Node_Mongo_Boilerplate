import nconf from 'nconf'
import mongoose from 'mongoose'

nconf.argv().file({ file: `${__dirname}/config.json` })

const urlMongo = `mongodb://${nconf.get('mongo:url')}:${nconf.get(
    'mongo:port'
)}/${nconf.get('mongo:dataBase')}`

const mongooseConnection = async () => {
    try {
        await mongoose.connect(urlMongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // eslint-disable-next-line global-require
        require('./src/server')
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

mongooseConnection()
