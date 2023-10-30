const express = require('express')
const router = express.Router()

const CardService = require('../services/cardService');

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
    CardService.getAllCards(res);
})

router.get('/generateDraw', (req, res) => {
    CardService.generateDraw(res);
})



module.exports = router