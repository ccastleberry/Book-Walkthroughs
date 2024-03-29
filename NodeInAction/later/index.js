const bodyParser = require('body-parser');
const express = require('express');
const {response} = require("express");

const app = express();

const articles = [{title: 'Example'}];

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/articles', (req, res, next) =>{
    res.send(articles);
});

app.post('/articles', (req, res, next) => {
    res.send('OK');
});

app.get('/articles/:id', (req, res, next) =>{
    const id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
});

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({message: 'Deleted'});
});


app.listen(app.get('port'), () => {
    console.log(`Express new listening on port ${app.get('port')}.`)
});

module.exports = app;