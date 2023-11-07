var express = require('express');
var router = express.Router();
//  Route for Tom's page
router.get('/', function(req, res, next) {
  res.render('tom');
});
// Route for Tom's page
router.get('/tom', function(req, res, next) {
  res.render('tom');
});

// Route for Chris's page
router.get('/chris', function(req, res, next) {
  res.render('chris');
});

// Route for John's page
router.get('/john', function(req, res, next) {
  res.render('john');
});

// Route for Emma's page
router.get('/emma', function(req, res, next) {
  res.render('emma');
});

module.exports = router;