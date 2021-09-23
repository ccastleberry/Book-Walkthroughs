const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const articles = [{title: 'Example'}];

app.set('port', process.env.PORT | 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(app.get('port'), () => {
    console.log(`Express new listening on port ${app.get('port')}.`)
});

module.exports = app;