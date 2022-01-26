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

 });
//authenticate route
router.get('/authenticate',(req,res,next)=>{
  res.send('authenticate done');
})
//profile route
router.get('/profile', (req,res,next)=>{
  res.send('profile');
})

module.exports = router;
