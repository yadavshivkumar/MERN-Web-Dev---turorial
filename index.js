const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!- Thi is is a GET request')
})
app.post('/', (req, res) => {
  res.send('Hello World!- This is a POST request')
})
app.put('/', (req, res) => {
  res.send('Hello World!- This is a PUT request')
})
        app.delete('/', (req, res) => {
        res.send('Hello World!- This is a DELETE request')
        })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

        