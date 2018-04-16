var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('../database/data');

router.get('/api/data', function(req, res, next) {
  res.json(data);
});

router.get('/api/images/:image', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../database/img', req.params.image));
});

module.exports = router;
