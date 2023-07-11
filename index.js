const express = require('express')
const app = express()
const port = 3001

app.get('/hapo', (req, res) => {
  res.send('Hello Thành Đông')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})