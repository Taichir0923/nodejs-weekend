const express = require('express');
const route = express.Router();
const newsController = require('../controller/news');
const isAuth = require('../middleware/is_auth');

route.post('/register-news' , isAuth.checkAthentication , newsController.registerNews);

route.get('/get-news/:id' , isAuth.checkAthentication , newsController.getSingleNews);
route.post('/comment/:id' , isAuth.checkAthentication , newsController.newComment);

module.exports = route;