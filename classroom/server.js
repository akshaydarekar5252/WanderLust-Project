const express = require('express');
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions = {
    secret : "mysupersecreatestring",
    resave: false,
    saveUninitialized: true,
}
app.use( session(sessionOptions) );
app.use(flash());
app.use((req,res,next)=> {
    res.locals.messages = req.flash("success");
    res.locals.error = req.flash("error");
    next()
});

app.get("/register",(req,res)=>{
    let { name="anonymous" } = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error","user not found!");
    }else{
        req.flash("success","user register successfully");
    }
    // res.send(name);
    res.redirect("/hello");
});

app.get("/hello", (req,res)=>{
    res.render("page.ejs", {name: req.session.name});
    
})















// app.get("/recount",(req, res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     };
//     res.send(`you sent a request ${req.session.count} times`);
// })

// app.get("/test",(req,res)=>{
//     res.send("test successful!");
// });













// app.use(cookieParser("secretcode")); 

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "india", { signed: true });
//     res.send("signed cookies sent");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/getcookie", (req, res) => {
//     res.cookie("greet", "hello");
//     res.cookie("greet", "good morning");
//     res.send("cookies was set successfuly!");
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("hi, i am root !");
// });

// app.get("/greet", (req, res) => {
//     let { name = "anonymous" } = req.cookies;
//     res.send(`Hi , ${name}`);
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, () => {
    console.log("server is listening to 3000 port ");
});