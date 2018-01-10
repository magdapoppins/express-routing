const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const app = express();

// Run node index.js in the console. 
app.listen(3000, () => {
    console.log('I am listening at :3000.')
});

// BASIC ROUTES

// GET '/'
app.get('/', (req, res) => {
    res.send("Ta-da, I'm here!")
});

// GET '/message'
app.get('/message', (req, res) => {
    res.send("Remember to make lunch for tomorrow!")
});

// LET'S DO CRUD WITH MONGODB

// Start server (replace link mlab, mongodb://<dbuser>:...)
MongoClient.connect('mongodb://spam:spam@ds247327.mlab.com:47327/crudexpress', (err, db) => {
    var database = db.db("crudexpress");
    if (err) return console.log(err)
    app.listen(3000, () => {
        console.log('working on :3000')
    })
});

