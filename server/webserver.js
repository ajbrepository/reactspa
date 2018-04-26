//Node Back End to render the HTMLs

const express = require('express');
const path =require('path');
const port = 8080;
const app = express();

app.use('/assets', express.static(path.join(__dirname, '../web/assets')));

app.get('/', function (req, res) {
    console.log("Webapp root Navigated at "+new Date().toString());
    res.sendFile(path.join(__dirname, '../web/index.html'));
});

app.get('/bundle.js', function (req, res) {
    console.log("Webapp root Navigated at "+new Date().toString());
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        console.log("Express Web Server started successfully"); 
    }
});
