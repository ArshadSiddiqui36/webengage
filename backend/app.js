const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
const app = express();
const users = require('./routes/users');
const config = require('./config/database');


mongoose.connect(config.database,(req,res)=>{
  console.log('connected to db');
});

app.use(cors());
app.use(bodyParser.json())
app.use('/users',users);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
  res.send('Welcome')
})
app.listen(port, (req,res) => {
   console.log("listening on port " + port);

})
