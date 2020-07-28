import express from 'express'
import nconf from 'nconf'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import routes from './routes'

const app = express()

app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(nconf.get('port') || 5000, () => {
    console.log(' -> API running on port  <-', nconf.get('port') || 5000)
})
