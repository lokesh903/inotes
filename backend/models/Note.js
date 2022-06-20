var mongoose= require('mongoose')


var  userSchema = new mongoose.Schema({
    
    title:{
        type:String,
        require:true,
    },
    content:{
        type:String,
        require:true,
        
    },
    tag:{
        type:String,
        
        
    },
    date:{
        type:Date,
        default:Date.now
        
    },
    
   
  })

  module.exports=mongoose.model("user",userSchema)