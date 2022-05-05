const express = require('express');
const app = express();

//EXERCISE 1:
app.use('/',express.static(__dirname+'/public'));

app.get('/home', (req,res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user)
    // console.log(user);
})

// EXERCISE 2:
app.get('/:p', (req,res) => {
    const id = req.params.p;
    res.json(req.params)
    console.log(req.params);
})







const PORT = 5000;
app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT} `);
    
})