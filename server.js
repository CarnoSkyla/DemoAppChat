const express = require('express');

const bodyParser = require('body-parser');

const app = express();

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
    res.sendStatus(200)
})

var server = app.listen(3000, () => {
    console.log('server is running on port ' + server.address().port);
}) 