var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var master = require('../models/master');

router.get('/retrieve-all', (req, res, next) => {
  Master.find()
  .exec(function(err, masters) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: masters
    });
  });
});


router.post('/signup', function(req, res, next) {
  var master = new Master ({

  })
});

module.exports = router;
