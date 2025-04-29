const express = require('express');
const router = express.Router();

//user
//Index - users 
router.get("/",(req,res)=>{
    res.send("Get for users ");
});

//show - users 
router.get("/:id",(req,res)=>{
    res.send("Get for show users ");
});

//Post - users 
router.post("/",(req,res)=>{
    res.send("post for users ");
});

//Delete - users 
router.delete("/:id",(req,res)=>{
    res.send("delete for users id ");
});

module.exports = router;
