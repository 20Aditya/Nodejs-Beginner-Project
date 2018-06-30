const express = require('express');
const router = express.Router();


router.get('/gallery', function(req,res){
  res.render('gallery', {
    title: 'Gallery'
  });
});


router.get('/basic_grid', function(req,res){
  res.render('basic_grid', {
    title: 'Gallery'
  });
});

router.get('/full-width', function(req,res){
  res.render('full-width', {
    title: 'Gallery'
  });
});

router.get('/sidebar-left', function(req,res){
  res.render('sidebar-left', {
    title: 'Gallery'
  });
});



module.exports = router;
