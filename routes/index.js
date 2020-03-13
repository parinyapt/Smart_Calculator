var express = require('express');
var router = express.Router();
const { Fcal } = require('fcal');

const fcal = new Fcal();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { math_expression: 'N/A' ,result: 'N/A' });
});

router.post('/', function(req, res, next) {
  var math_express = "" 
  math_express = req.body.math_expression
  var result_output = "Not found result output"
  if(math_express==0 || math_express==""){
    math_express = "N/A"
    result_output = "N/A"
  }
  else{
    result_output = fcal.evaluate(math_express)
  }
  res.render('index', { math_expression: math_express ,result: result_output });
});

module.exports = router;
