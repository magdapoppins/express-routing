const express = require('express');
const app = express();

// Run node index.js in the console. 
app.listen(3000, function() {
    console.log('I am listening at :3000.')
});

// GET '/'
app.get('/', function(req, res) {
    res.send("Ta-da, I'm here!")
});

// GET '/message'
app.get('/message', function(req, res) {
    res.send("Remember to make lunch for tomorrow!")
});