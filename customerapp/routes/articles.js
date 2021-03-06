const express = require('express');
const router = express.Router();



//Adding models
let Article = require('../models/articles');


router.get('/add',function(req,res){
  res.render('add_article', {
    title: 'Add Article'
  });
});

router.get('/:id', function(req,res){
  Article.findById(req.params.id, function(err,article){
    res.render('article', {
      article: article
    });
  });
});

router.post('/add', function(req,res){
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  article.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});

//Edit form
router.get('/edit/:id', function(req,res){
  Article.findById(req.params.id, function(err,article){
    res.render('edit_article', {
      title: 'Edit Article',
      article: article
    });
  });
});


//Update Submit
router.post('/edit/:id', function(req,res){
  let article = {};
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  let query = {_id:req.params.id}

  Article.update(query, article, function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});


router.delete('/:id', function(req,res){

  let query = {_id:req.params.id}

  Article.remove(query, function(err){
    if(err){
      console.log(err);
    }
    res.send('Success');
  });
});

module.exports = router;
