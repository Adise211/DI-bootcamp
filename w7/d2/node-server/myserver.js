// EXERCISE 1:
// 1.Create a new folder, name it - node-server
// 2.Create a server file, name it - myserver.js
// 3.In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
//4. Your server should run on http://localhost:3000/

const { Console } = require('console');
const http = require('http');

const server = http.createServer((req,res) => {
        res.write('<h1>Hello</h1>');
        res.write('<h2>I am sending you that</h2>');
        res.write('<h3>from the server</h3>');

    });

const PORT = 3000;

server.listen(PORT,() => {
    console.log(`I'm listening from ${PORT} port`)
})


