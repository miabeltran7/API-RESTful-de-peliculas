import express from 'express'
import rutaPeliculas from './routes/ruta-peliculas.js'
import db from './models/db.js'
import logger from './middlewares/logger.js'
import validarApiKey from './middlewares/apiKey.js'

const port = 3000
const app = express()

app.use(express.json())
app.use(logger)
app.use(validarApiKey)

app.use('/peliculas', rutaPeliculas)

db.sync().then(() => {
  console.log('Servicio iniciado')
  app.listen(port)
})