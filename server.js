const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const messages = [
    {name: 'Sibu', message: 'Hello'},
    {name: 'Sky', message: 'Hi'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('user connected');
})

var server = http.listen(3000, () => {
    console.log('server is running on port ' + server.address().port);
}) 