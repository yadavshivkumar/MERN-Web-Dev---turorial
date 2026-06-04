const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World,  Shiv!')
})

app.get('/about', (req, res) => {
  res.send('I am the about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})