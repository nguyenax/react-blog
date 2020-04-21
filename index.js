const express = require('express');

const app = express();

//Connect MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin123@cluster0-t3vp7.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log('DB connected.'))
.catch(err => console.error(err));

app.get('/', (req,res) => {
    res.send('heelo');
})

app.listen(5000);

console.log("Your server http://localhost:5000")