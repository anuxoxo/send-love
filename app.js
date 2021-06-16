const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const { json } = require('express');

const port = 80;
const app = express();

app.use('/public', express.static('public'));
app.use(express.urlencoded());                // Instead of using body-parser

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.status(200).render('index', { 'title': 'Send Love...' });
});

app.post('/', (req, res) => {
    const loveText = {
        name: req.body.name,
        msg: req.body.comments,
    };

    if ((loveText.name != '') && (loveText.msg != '')) {

        res.render('success', { 'title': 'Thanks!' });
        fs.appendFileSync("msg.txt", "\n" + JSON.stringify(loveText));
    }
    else {
        res.render('error', { 'title': 'Error!' })
    }
});

app.listen(port, () => {
    console.log("Server started at " + port);
});



