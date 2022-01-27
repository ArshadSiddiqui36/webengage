const express = require('express');
const router = express.Router();
// const User = require('../models/user');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
//Register Route
 router.post ('/register', (req,res,next) => {
   let newUser = new User({
     name: req.body.name,
     email: req.body.email,
     username: req.body.username,
     password: req.body.password
   });
  User.addUser(newUser, (err,user) => {
    if(err) {
      console.log(err);
      res.json({success: false, msg: 'Failed to Register User'});
    }else{
      res.json({success: true, msg: 'User Registered!'})
    }
  });


 });
//authenticate route
router.post('/authenticate',(req,res,next)=> {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username,(err,user)=> {
    if(err) throw err;
    if(username==="" || password==="") return res.json({success: false,msg: "All fields are required"});
    if(!user) return res.json({success: false,msg: 'User not found'});
    User.comparePassword(password, user.password, (err, isMatch)=> {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data:user},"secret", {
          expiresIn: 604800,
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }else {
        return res.json({success: false, msg: "wrong Password"});
      }
    })
  })
});
//profile route
router.get('/profile',passport.authenticate('jwt',{session: false}),(req,res,next)=>{
  res.json({user: req.user})
});

module.exports = router;
