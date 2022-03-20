const express = require('express');
const route = express.Router();
const userController = require('../controller/user');
const authCheck = require('../middleware/is_auth');

route.post('/register' , userController.regiterUser);
route.post('/login' , userController.login);
route.get('/get-users' , userController.getUsers);
route.get('/get-single-user/:id' , authCheck.checkAthentication , userController.getSingleUser);
route.delete('/delete-user/:id' , userController.deleteUser);
route.put('/update-user/:id' , userController.updateUser);

// patch
// medee
// http://localhost:3000/get-single-user/gjkdflsgjsdkflhjl

module.exports = route;