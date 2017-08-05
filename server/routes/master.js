var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var master = require('../models/master');

/* GET home page. */
router.post('/signup', function(req, res, next) {
  var master = new Master ({

  })
});

module.exports = router;
