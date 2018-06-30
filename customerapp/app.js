var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@localhost:27017/nodekb?authSource=admin');
let db = mongoose.connection;

//Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

//Check for db error
db.on('error', function(err){
  console.log(err);
});

//init app
var app = express();

let Article = require('./models/articles');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Set public folder
app.use(express.static(path.join(__dirname,'/public/')));

//Home Route
app.get('/', function(req,res){
  Article.find({}, function(err,articles){
    if(err)
      console.log(err);
    else{
      res.render('index', {
        title:'Articles',
        articles:articles
      });
    }
  });
});


let articles = require('./routes/articles');
app.use('/articles',articles);



app.listen(3000, function(){
  console.log('Server started at port 3000...');
});
