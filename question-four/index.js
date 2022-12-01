require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Accept, X-Requested-With, Authorization, Content-Type, x-custom-header');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    next();
});

const PORT  = process.env.PORT || 8000

app.listen(PORT, () => {
    require()
    console.log(`Server listening on port ${PORT}`)
});