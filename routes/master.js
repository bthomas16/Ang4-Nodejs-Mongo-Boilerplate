var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Master = require('../models/master');

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
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      yearsExp: req.body.yearsExp,
      skill1: req.body.skill1,
      skill2: req.body.skill2,
      skill3: req.body.skill3
  });
  console.log('server side signup route', master);
  master.save((err, result) => {
    console.log(err, result);
    if(err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'Master created',
      obj: result
    });
  });
});

router.post('/login', (req, res, next) => {
  Master.findOne({email: req.body.email}, function(err, master) {
    if(err) {
      res.status(500).json({
        title: 'An Error Occured',
        error: err
      });
    }
    if(!master) {
      return res.status(401).json({
        title: 'Login Failed',
        error: {message: 'Invalid Login Credentials'}
      });
    }
    if(!bcrypt.compareSync(req.body.password, master.password)) {
      return res.status(401).json({
        title: 'Login Failed',
        error: {message: 'Invalid Login Credentials'}
        })
      }
      var token = jwt.sign({master: master}, 'nobadideas', {expiresIn: 21600});
      res.status(200).json({
        message: 'Successfully Logged In',
        token: token,
        masterId: master._id
      });
    });
  });

module.exports = router;
