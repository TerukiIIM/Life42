const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('RouterRoom')
    next()
})

// define the home page route
router.get('/:roomId', (req, res) => {
    res.send('Room');
})

module.exports = router