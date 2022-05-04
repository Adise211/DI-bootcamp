// EXERCISE 3:
//1. Create a server file, name it - serverExpress.js
//2. Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
//3. Remember to use the GET method for the server route.
//4. Your server should run on http://localhost:3000/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello sending you this from server as response to your request</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT} `);
})