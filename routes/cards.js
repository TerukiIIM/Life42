const express = require('express')
const router = express.Router()

const fs = require('fs');

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', (req, res) => {
    res.send('Card page')
})

router.get('/getAllCards', (req, res) => {
    fs.readFile('./config/cards.json', 'utf8', (err, jsonString) => {
        res.json(JSON.parse(jsonString));
    })
})



module.exports = router