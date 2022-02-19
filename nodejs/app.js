const express = require('express');
const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'pages');

app.get('/' , (req, res) => {
    res.render('index' , {
        data: ["Hi there" , "hello" , 123]
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

app.listen(3000 , () => {
    console.log('server started at port 3000')
});

// server side template , pug template , clear template


// <%= utga avna %>
// <% js code %>
// <%- html parse %>

// post 