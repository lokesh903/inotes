const express = require("express")
const router = express();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const {registerValidator}=require("../utils/validator")

router.get("/",(req,res)=>{
    console.log(req.body);
    
})
router.post("/register",registerValidator,(req,res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    var newUser= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      })
      User.create(newUser,function(err,user){
        if(err){
          res.send(err)
        }else{
          res.send("user added successfully")
        }
      })
})

module.exports=router