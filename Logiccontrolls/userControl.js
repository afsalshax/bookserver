const user = require("../models/userModel")
const books = require("../models/bookModel")

exports.register = async (req,res)=>{
    const {userName,email,password}=req.body

try{  //to resolve run time errorrs 
    const existingUser = await user.findOne({email})
    if(existingUser){
       res.status(400).json("Registration only occurs once.")
    }
    else{
       const newUser=new user({
           userName,email,password
       })
   
       await newUser.save()
       res.status(200).json(newUser)
    } 
}
catch(err){ // any error occured.then what is the next move 

    res.status(401).json(` Register Api failed.! ${err}`)
}
}

exports.login = async (req,res)=>{
    const {email,password}=req.body
try{
    const existingUser= await user.findOne({email,password})
    if(existingUser){

       
        res.status(200).json("login succesfully")
    }
    else{
        res.status(400).json("Incorrect user email or password")
    }

}
catch(err){
    res.status(401).json("Login api failed.!")
}
}

exports.getauser=async(req,res)=>{
    try{

     const user = await user.findById(req.params.id)  
     res.status(200).json(user)

    }catch(err){
        res.status(401).json(err)
    }
   }


   exports.post = async (req,res)=>{
    const {bookname,author}=req.body

try{  //to resolve run time errorrs 
    const existingbook = await books.findOne({bookname})
    if(existingbook){
       res.status(400).json("book name exist")
    }
    else{
       const newbook=new books({
           bookname,author
       })
   
       await newbook.save()
       res.status(200).json(newbook)
    } 
}
catch(err){ // any error occured.then what is the next move 

    res.status(401).json(`Add Api failed.! ${err}`)
}
}

exports.getbooks=async(req,res)=>{
    try{

     const bookss = await books.find()  
     res.status(200).json(bookss)

    }catch(err){
        res.status(401).json(err)
    }
   }