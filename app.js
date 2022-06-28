const http = require('http')
var fs = require('fs');
var url = require('url');
var express = require('express');
const exp = require('constants');
const app = express();

const hostname = '127.0.0.1'
const port = 3000

//this creates local server

app.use(express.static('Frontend'));
app.use('/css', express.static(__dirname + 'Frontend/css'));
app.use('/js', express.static(__dirname + 'Frontend/js'));
app.use('/img', express.static(__dirname + 'Frontend/SocialIcon/img'));
app.use('/mp3', express.static(__dirname + 'Frontend/mp3'));
app.get('', (req, res) => {
    res.sendFile(__dirname + 'Frontend/index.html');
    res.sendFile(__dirname + 'Frontend/stopwatch.html');
    res.sendFile(__dirname + 'Frontend/TimerPage.html');
    res.sendFile(__dirname + 'Frontend/WorldClock.html');

})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


