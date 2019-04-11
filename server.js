'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});


// upload file and return a JSON object with the file name and size in bytes
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  //res.send(req.file);
  res.json({'File Name': req.file.originalname, 'File Size': req.file.size + ' bytes'});
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
