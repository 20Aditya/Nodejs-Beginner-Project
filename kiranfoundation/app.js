var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


//init app
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/layout/')));
app.use(express.static(path.join(__dirname, '/images/')));


app.get('/', function(req,res){
  res.render('index');
});

let links = require('./routes/links');
app.use('/links',links);

app.listen(3000, function(){
  console.log('Server started at port 3000...');
});
