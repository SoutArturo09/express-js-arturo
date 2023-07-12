const express = require("express");
const path=require("path"); 
const app = express();

app.get("/", (req,resp)=>{
//resp.send("hello world");
resp.sendFile(path.join(__dirname + "/index.html"))
});

app.listen (8000, ()=>{
    console.log ("server listen on port", 8000);
});