const express = require('express');
const app = express();
const mongoose = require('mongoose')

//routes
const subscriberRouter = require('./routes/subscribers');

app.use('/subscribers', subscriberRouter)

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
db.once('open', ()=> console.log('connected to database'))

app.use(express.json())

app.listen(3000, ()=>console.log(' server started '))