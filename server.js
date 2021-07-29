const express = require('express');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config()

const url = process.env.DATABASE_URL;
const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD

mongoose.connect(url, { 
    useNewUrlParser:true,
    dbName: "subscriber",
    user: user,
    pass: pass

});
const db = mongoose.connection
db.on('error',(error) => console.error(error))

app.listen(3000, ()=>console.log(' server started '))