const User = require('../model/user');
const jwt = require('jsonwebtoken');
class IsAuth {
    async checkAthentication(req , res , next){
        const {authorization} = req.headers;
        const token = authorization.split(' ')[1];
        try {
            const result = jwt.verify(token , 'user-secret');
            const user = await User.findById(result.userId)
            if(user){
                req.user = user;
                next();
            } else {
                throw new Error("Алдаа гарлаа...")
            }
        } catch (err) {
            res.json(err.message);
        }
    }
}

module.exports = new IsAuth();