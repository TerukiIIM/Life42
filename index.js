const express = require('express')
var favicon = require('serve-favicon')

const app = express()
const port = 3000

const cardRouter = require('./routes/cards');

app.use(express.static('src'));

app.use('/card', cardRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})