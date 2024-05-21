const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hullo World!')
})

app.get('/api', (req, res) => {
  res.send('Hullo, World! Good Night, Moon.')
})

app.listen(port, () => {
  console.log(`Friendly app listening on port ${port}`)
})
