const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv/config');

const app = express();

//Body-parser
app.use(express.json());
//Router
const route = require('./routerPage');
app.use('/tech', route);

//Server Connectivity
app.listen(8080, (err)=>{
if(err){throw err}
else{console.log('Server started in 8080')}
});

//DB Connectivity
mongoose.connect(process.env.DB_CONNECTIVITY, (err)=>{
    if(err){throw err}
    else{console.log('DB Connected successfully')}
});
