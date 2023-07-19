const express = require("express");
const path=require("path"); 
const app = express();
const port=8000
const {firebaseAuth}= require ('./src/services/firebase/auth')
const routes = require ('./src/routes');

app.use(express.json())
app.use(firebaseAuth);
routes(app)

app.listen (8000, ()=>{
    console.log ("server listen on port", 8000);
});