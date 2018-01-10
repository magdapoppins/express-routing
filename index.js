const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
const app = express();

// For the app to receive POST requests, it needs a the body-parser-package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
MongoClient.connect('CONNSTRING<3', (err, db) => {
    var dbase = db.db("crudexpress");
    if (err) return console.log(err)
    app.listen(3000, () => {
        console.log('working on :3000')
    })
});

// The POST route
app.post('/colors/add', (req, res, next) => {
    var color = {
        color_name: req.body.color_name,
        sample_thing: req.body.sample_thing
    };
    dbase.collection("color").save(color, (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send('POST successful');
    });
});