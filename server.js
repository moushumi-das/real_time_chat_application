const express = require('express');
const app = express()
const http = require('http').createServer(app)
const path = require('path')
app.use(express.static(__dirname + '/public'))
const PORT = process.env.PORT || 3000;
http.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
const io = require('socket.io')(http)
io.on('connection', (socket) => {
    console.log('Connected...')
})