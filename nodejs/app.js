const http = require("http");
const fileSystem = require('fs');

const server = http.createServer(function(request , response){
    if(request.url === '/'){
        fileSystem.readFile('./test.txt' , 'utf-8' , (err , data) => {
            // console.log(data)
            response.end(data);
        })
    } else if (request.url === '/about'){
        const userData = {
            ner: "Narada",
            email: "narada@mail.com",
            utas: 99009900
        }
        fileSystem.writeFile('./user.json' , JSON.stringify(userData) , () => {
            // console.log(data)
            response.end('hereglegch uusgegdlee');
        })
        // fileSystem.writeFileSync('./test.txt' , "file update");
    } else {
        response.end('404 page not found')
    }
})

// writeFile - asynchronous
// writeFileSync - synchronous

server.listen(3000);

// Гэрт express js судлах

// npm - node package management

// github.com/taichir0923/nodejs-weekend