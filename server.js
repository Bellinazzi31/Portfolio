const express = require('express')
const server = express()

const host = 'localhost'
const port = 9191

server.use('/', express.static('./'))
server.use('/dist', express.static('./dist'))
server.use('/static', express.static('./static'))

server.get('*',function(req,res) {
  res.sendFile(__dirname + '/dist/index.html')
})

server.listen(port, host, () => {
  console.log(`app running on http://${host}:${port}`)
})
