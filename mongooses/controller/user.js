const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
class UserController {
    regiterUser(req, res) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const number = req.body.number;
        const password = req.body.password;
        const email = req.body.email;

        bcrypt.hash(password , 12)
            .then(result => {
                const user = new User({
                    firstname: firstname,
                    lastname: lastname,
                    number: number,
                    email: email,
                    password: result
                })
        
                user.save()
                    .then(() => {
                        res.json({
                            message: "medeelel huleen avlaa..."
                        })
                    })
                    .catch(err => {
                        res.json({
                            message: err.message
                        })
                    })
            })


    }


    getUsers(req, res){
        User.find()
            .then(users => {
                res.json(users);
            })
    }

    getSingleUser(req, res){
        const id = req.params.id;
        User.findById(id)
            .then(user => {
                res.json(user);
            })
    }

    deleteUser(req, res){
        const id = req.params.id;
        User.findByIdAndDelete(id)
            .then(user => {
                res.json({
                    message: "Done!",
                    result: user
                })
            })
    }

    updateUser(req, res){
        const id = req.params.id;
        const {firstname , lastname , number , email} = req.body;
        User.findById(id)
            .then(user => {
                user.firstname = firstname;
                user.lastname = lastname;
                user.number = number;
                user.email = email;

                user.save()
                    .then(result => {
                        res.json({
                            message: "update.success",
                            result: result
                        })
                    })
            })
    }

    login(req, res){
        const {email , password} = req.body;
        User.findOne({email: email})
            .then(user => {
                if(!user){
                    throw new Error("Нууц үг эсвэл имэйл буруу байна...")
                }
                bcrypt.compare(password , user.password)
                    .then(matched => {
                        if(!matched){
                            throw new Error("Нууц үг эсвэл имэйл буруу байна...")
                        }

                        const token = jwt.sign({
                            userId: user._id
                        } , "user-secret" , {
                            expiresIn: '1h'
                        })
                        res.json({
                            token: token
                        });
                    })
            })
            .catch(err => {
                res.json(err.message);
            })
    }
}

module.exports = new UserController();