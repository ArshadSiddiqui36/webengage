const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();


const port = 3000;

app.listen(port, (req,res) => {
   console.log("listening on port " + port);
})
