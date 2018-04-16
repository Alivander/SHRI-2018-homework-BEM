var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.useragent.isDesktop) {
    res.render('desctop');
  } else if (req.useragent.isTablet){
    res.render('tablet');
  } else if (req.useragent.isMobile) {
    res.render('mobile');
  } else {
    res.render('index');
  }
});

module.exports = router;
