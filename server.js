const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const db = require('./db')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(process.env.PORT || 8080, () => console.log('Listening...'))
