var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Apprentice = require('../models/apprentice');

/* GET home page. */
router.post('/signup', function(req, res, next) {
  var apprentice = new Apprentice ({
    fullname: req.body.fullname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  console.log(apprentice);
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
  console.log('made it');
  Apprentice.findOne({email: req.body.email},
  function(err, apprentice) {
    console.log(apprentice);
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

  router.get('/profile-retrieve/:id', (req,res)=> {
    Apprentice.findOne({_id: req.params.id})
    .exec(function(err, apprentice) {
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: apprentice
      });
    });
  });




module.exports = router;
