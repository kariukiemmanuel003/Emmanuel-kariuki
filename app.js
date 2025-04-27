const express = require('express')
const mongoose = require('mongoose')
// const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const router = require('./controllers/recipe')

const app = express()

// logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect("mongodb+srv://07299kama:sTqgue9zjDXUpMXD@cluster0.ektdrgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/recipes', router)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app