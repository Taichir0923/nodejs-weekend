const express = require('express');
const route = express.Router();
const userController = require('../controller/user');

route.post('/register' , userController.regiterUser);
route.get('/get-users' , userController.getUsers);
route.get('/get-single-user/:id' , userController.getSingleUser);
route.delete('/delete-user/:id' , userController.deleteUser);
route.put('/update-user/:id' , userController.updateUser);

// patch
// medee
// http://localhost:3000/get-single-user/gjkdflsgjsdkflhjl

module.exports = route;