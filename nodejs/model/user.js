const fs = require('fs');
const path = require('path');
const pth = path.join(__dirname , '../' , 'data/' , 'users.json');
module.exports = class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }
    
    save(){
        fs.readFile(pth , 'utf-8' , (err , data) => {
            const users = JSON.parse(data);
            users.push(this);
            fs.writeFile(pth , JSON.stringify(users) , (err) => {
                if(!err){
                    console.log('amjilttai burtgegdlee')
                }
            })
        })
    }

    static findByEmail(email){
        const data = fs.readFileSync(pth , 'utf-8');
        const users = JSON.parse(data);
        const user = users.find(usr => usr.email === email);
        if(!user){
            return "Email esvel nuuts ug buruu bna"
        }
         return user;
    }
}

// __dirname ./

