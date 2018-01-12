const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
const app = express();

// For the app to receive POST requests, it needs a the body-parser-package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Run node index.js in the console. 
// app.listen(3500, () => {
//     console.log('I am listening at :3000.')
// });

// BASIC ROUTES

// GET '/'
app.get('/', (req, res) => {
    res.send("Ta-da, I'm there!")
});

// GET '/message'
app.get('/message', (req, res) => {
    res.send("Remember to make lunch for tomorrow!")
});

// LET'S DO CRUD WITH MONGODB

var http=require('http');

// var server=http.createServer(function(req,res){
//     res.end('test');
// });

// server.on('listening',function(){
//     console.log('ok, server is running');
// });

// server.listen(3000);

// Start server (replace link mlab, mongodb://<dbuser>:...)
MongoClient.connect('mongodb://spam:spam@ds247327.mlab.com:47327/crudexpress', (err, db) => {
    var dbase = db.db("crudexpress");
    if (err) return console.log(err)
    app.listen(3500, () => {
        console.log('working on :3500')
    })
}); 


// The POST route
app.post('/color/add', (req, res, next) => {
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

