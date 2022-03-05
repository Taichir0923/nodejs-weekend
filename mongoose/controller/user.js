const User = require('../model/user');
class UserController {
    regiterUser(req, res) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const number = req.body.number;

        const user = new User({
            firstname: firstname,
            lastname: lastname,
            number: number
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
}

module.exports = new UserController();