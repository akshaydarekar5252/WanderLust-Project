const express = require('express');
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.get("/getcookie",(req,res)=>{
    res.cookie("greet","hello");
    res.cookie("greet","good morning");
    res.send("cookies was set successfuly!");
});

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("hi, i am root !");
});
app.get("/greet",(req,res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`Hi , ${name}`);
});

app.use("/users",users);
app.use("/posts",posts);




app.listen("3000",(req, res)=>{
    console.log("server is listening to 3000 port ");
});