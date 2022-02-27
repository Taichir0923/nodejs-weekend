const express = require('express');
const bp = require('body-parser');
const User = require('./model/user');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'pages');

app.use(bp.urlencoded({extended: false}));

app.get('/' , (req, res) => {
    fs.readFile(path.join(__dirname , '/data' , '/download.json') , 'utf-8' , (err , data) => {
        if(!err){
            const users = JSON.parse(data);
            res.render('index' , {
                data: users 
            })
        } else {
            res.end('aldaa garlaa')
        }
    })
});

app.get('/home' , (req, res) => {
    res.render('home' , {
        title: 'homepage'
    })
})

app.get('/about' , (req, res) => {
    res.end('about page')
})

app.get('/register' , (req , res) => {
    res.render('register')
});

app.post('/get-form-data' , (req, res) => {
    const {username , email , password} = req.body;
    const user = new User(username, email , password);
    user.save();
    res.redirect('/register')
});

app.get('/login' , (req , res) => {
    res.render('login')
})

app.post('/login' , (req, res) => {
    const {email , password} = req.body;
    const result = User.findByEmail(email);
    if(!result){
        res.redirect('/login')
    } else {
        if(result.password === password){
            res.redirect('/')
        } else {
            res.redirect('/login')
        }
    }
})

app.listen(3000 , () => {
    console.log('server started at port 3000')
});

// server side template , pug template , clear template


// <%= utga avna %>
// <% js code %>
// <%- html parse %>

// post - hereglegchees data avah
// request => body

// body-parser => hereglegchees data avahad heregleh package

// hereglegchiin data ustgah
// update hiih


// query parameter
// req.params