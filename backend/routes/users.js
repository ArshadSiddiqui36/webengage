const express = require('express');
const router = express.Router();


//Register Route
 router.get('/register', (req,res,next) => {
   res.send('resister');
 });
//authenticate route
router.get('/authenticate',(req,res,next)=>{
  res.send('authenticate');
})
//profile route
router.get('/profile', (req,res,next)=>{
  res.send('profile');
})
//validate
router.get('/validate',(req,res,next)=>{
  res.send('validate');
})
module.exports = router;
