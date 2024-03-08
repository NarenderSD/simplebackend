require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Jay Shree Ram')
})

app.get('/linkedin', (req, res) => {
    res.send('narender')
  })

app.listen(pprocess.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})