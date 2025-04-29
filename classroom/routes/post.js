const express = require('express');
const router = express.Router();

//posts
//Index 

router.get("/",(req,res)=>{
    res.send("Get for posts ");
});

//show   

router.get("/:id",(req,res)=>{
    res.send("Get for show posts ");
});

//Post 

router.post("/",(req,res)=>{
    res.send("post for posts ");
});

//Delete 

router.delete("/",(req,res)=>{
    res.send("delete for posts id ");
});

module.exports = router;
