'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.post('api/fileanalyse', upload.single('inputFile'), function (req, res) {
  
  const { originalname: name, mimetype: type, size } = req.file;
  res.send({
    name,
    type,
    size
  })
})



app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
