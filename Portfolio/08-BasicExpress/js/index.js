const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../'));

//Here I'm including body parser, to be honest I don't really remember how to use
//it so I asked chatGPT for assistance.
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Listening in port 3000");
});

//ChatGPT generated this section, and the EJS code to accept the response from the server.
//I was using agent mode and it filled it in automatically lol.
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = weight && height ? ((weight / (height)^2)*10000) : '';
    res.render('index', { bmi });
});
