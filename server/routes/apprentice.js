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

router.post('/login', (req, res, next) => {
  Apprentice.findOne({username: req.body.username},
  function(err, apprentice) {
    if(err) {
      res.status(500).json({
        title: 'An Error Occured',
        error: err
      });
    }
    if(!apprentice) {
      return res.status(401).json({
        title: 'Login Failed',
        error: {message: 'Invalid Login Credentials'}
      });
    }
    if(!bcrypt.compareSync(req.body.password, apprentice.password)) {
      return res.status(401).json({
        title: 'Login Failed',
        error: {message: 'Invalid Login Credentials'}
        })
      }
      var token = jwt.sign({apprentice: apprentice}, 'nobadideas', {expiresIn: 21600});
      res.status(200).json({
        message: 'Successfully Logged In',
        token: token,
        apprenticeId: apprentice._id
      });
    });
  });


module.exports = router;
