//EXERCISE 2:
// 1. Create a server file, name it - server.js
// 2. In this file, use http to create a server. Send the below Javascript Object to the browser
const http = require('http');

const server = http.createServer((req,res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user));
    

});

const PORT = 8080;

server.listen(PORT,() => {
console.log(`I'm listening on ${PORT} port`)
})