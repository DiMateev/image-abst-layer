const express = require('express');
const multer = require('multer');
var storage = multer.memoryStorage()

var upload = multer();

const app = express();


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/uploads', upload.single('file'), (req, res) => {
  res.send(JSON.stringify({size: req.file.size}));
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
