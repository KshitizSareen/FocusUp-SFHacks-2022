const express= require('express');
const app= express();

const ServiceAccount = require('./ServiceAccountKey.json');

const firebaseAdmin= require('firebase-admin')

const bodyParser= require('body-parser');

const cors = require('cors');

app.use(cors({
    origin: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.send("Hello From SF Hacks");
});

app.get('/hi',(req,res)=>{
    res.send("Hello From Kshitiz");
});

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });