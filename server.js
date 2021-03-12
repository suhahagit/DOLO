require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const path = require('path')

const app = express()
const mongoUri = "mongodb+srv://Dolo:doloq6@cluster0.aialb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('node_modules'))

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(express.static('build'))
app.use('/', api)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = 4200
app.listen(PORT, () => {
    console.log(`Up and running on ${PORT}`)
})