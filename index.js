const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const { mongoConnecter } = require('my-controllers');
const port = 5005;


const app = express();
// mongoConnecter('mongodb+srv://nivedithatsurs2001:28ZoDnsw110rhTdV@cluster0.ctvblng.mongodb.net/')
// app.use(express.json());
// app.use('/api', require('./routes/userroute'))
// app.use('/api', require('./routes/pgroute'))


app.listen(port, ()=>{
    console.log('app is connected with port number 5005')
    



})

