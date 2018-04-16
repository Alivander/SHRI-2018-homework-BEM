var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('../database/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.useragent.isDesktop) {
    res.sendFile(path.join(__dirname, '../public', 'desktop.html'));
  } else if (req.useragent.isTablet){
    res.sendFile(path.join(__dirname, '../public', 'tablet.html'));
  } else if (req.useragent.isMobile) {
    res.sendFile(path.join(__dirname, '../public', 'mobile.html'));
  } else {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  }
});

router.get('/api/data', function(req, res, next) {
  res.send(data);
});

// router.get('/api/:request', function(req, res, next) {
//   if (req.params.request === 'data') {
//
//     res.send(data);
//   }
// });


module.exports = router;
