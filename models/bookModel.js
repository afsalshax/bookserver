const mongoose=require('mongoose')

// structure of the users data

const bookSchema=new mongoose.Schema({


    bookname:{
        type:String,
        max:500
    },
    author:{
        type:String      
    }
}
)

//create model 
const books =new mongoose.model("books",bookSchema)

module.exports=books
