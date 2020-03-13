var express = require('express');
var router = express.Router();
const { Fcal } = require('fcal');

const fcal = new Fcal();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N/A' ,outputre: 'N/A' });
});

router.post('/', function(req, res, next) {
  var equation = "" 
  equation = req.body.equation
  var reout = "Not found result output"
  if(equation==0){
    equation = "N/A"
    reout = "N/A"
  }
  else{
    reout = fcal.evaluate(equation)
  }
  res.render('index', { title: equation ,outputre: reout });
});

module.exports = router;
