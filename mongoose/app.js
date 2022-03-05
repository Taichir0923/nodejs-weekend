const express = require('express');
const bp = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const userRoutes = require('./route/user');

app.use(cors());
app.use(bp.json());

app.use(userRoutes);

mongoose.connect("mongodb://localhost:27017/restapi" , () => {
    app.listen(3000 , () => {
        console.log('server started at port 3000')
    });
})


// MVC - Model View Controller

// app.get('path' , controller)

// 1. medeenii CRUD endpoint uusgeh
// 2. hereglegchiin login endpoint uusgeh