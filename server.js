const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    db.query('SELECT * FROM orders', (err, results) => {
        if (err) console.log(err)

        res.sendFile(`${__dirname}/public/index.html`)
    })
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(process.env.PORT || 8080, () => console.log('Listening...'))
