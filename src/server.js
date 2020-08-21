import express from 'express'
import nconf from 'nconf'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import errorhandler from 'errorhandler'
import morgan from 'morgan'
// import expressValidator from 'express-validator'
import routes from './routes'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
// app.use(expressValidator())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (nconf.get('env') === 'development') {
    app.use(errorhandler())
}

app.use('/', routes)

app.listen(nconf.get('port') || 5000, () => {
    console.info(` -> API running on port ${nconf.get('port') || 5000}  <-`)
})
