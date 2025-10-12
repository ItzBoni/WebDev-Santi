const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Here I'm including body parser, to be honest I don't really remember how to use
//it so I asked chatGPT for assistance.
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    res.send((weight / ((height/100) ** 2)));
});


app.listen(3000, () => {
    console.log("Hola como estás?");
});