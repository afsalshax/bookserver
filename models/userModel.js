const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    userName:{
      type:String,
      required:true,
      unique:true,
      min:3,
      max:20
    },
    email:{
       type:String,
       required:true,
       max:50,
       unique:true
    },
    password:{
       type:String,
       required:true,
       min:5
    }
}

)

//create model 
const user = mongoose.model("user",userSchema)

module.exports=user
