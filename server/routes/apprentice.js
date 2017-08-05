var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Apprentice = require('../models/apprentice');

/* GET home page. */
router.post('/signup', function(req, res, next) {
  var apprentice = new Apprentice ({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  apprentice.save((err, result) => {
    if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Apprentice created',
            obj: result
        });
      });
    });

module.exports = router;
