const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use('/public', express.static('public'))

app.get('/', async (req, res) => {
    db.query('SELECT * FROM orders', (err, results) => {
        if (err) console.log(err)

        console.log(results.rows);

        res.sendFile(`${__dirname}/public/index.html`)
    })
})

app.listen(process.env.PORT || 8080, () => console.log('Listening...'))
