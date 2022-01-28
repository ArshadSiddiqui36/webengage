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


 mongoose.connect("mongodb://localhost:27017/auth",{useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
  console.log("database connected!");
})

app.use(cors());
app.use(bodyParser.json())
app.use('/users',users);
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);



app.get('/', (req,res) => {
  res.send('Welcome')
})
app.listen(port, (req,res) => {
   console.log("listening on port " + port);

})
