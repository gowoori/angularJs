var express = require('express');
var app     = express();

app.get('/', function(req, res) {
    res.sendfile('./public_html/index.html');
});

app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/public_html'));

app.listen(3000);
console.log('Express listening on port 3000');