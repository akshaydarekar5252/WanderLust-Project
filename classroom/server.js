const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("hi, i am root !");
});

//user
//Index - users 

app.get("/users",(req,res)=>{
    res.send("Get for users ");
});

//show - users 

app.get("/users/:id",(req,res)=>{
    res.send("Get for show users ");
});

//Post - users 

app.post("/users",(req,res)=>{
    res.send("post for users ");
});

//Delete - users 

app.delete("/users",(req,res)=>{
    res.send("delete for users id ");
});

//posts
//Index 

app.get("/posts",(req,res)=>{
    res.send("Get for posts ");
});

//show   

app.get("/posts/:id",(req,res)=>{
    res.send("Get for show posts ");
});

//Post 

app.post("/posts",(req,res)=>{
    res.send("post for posts ");
});

//Delete 

app.delete("/posts",(req,res)=>{
    res.send("delete for posts id ");
});


app.listen("3000",(req, res)=>{
    console.log("server is listening to 3000 port ");
});