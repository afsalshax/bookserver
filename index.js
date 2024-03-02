require('dotenv').config()

//import express
const express=require('express')

const cors=require('cors')


const routes=require('./Routes/routes')

require('./database/connection')

//create server using server
const bookServer=express()
bookServer.use(cors())

//convertion of json to js data
bookServer.use(express.json())

bookServer.use(routes)


//Port
const PORT=5005 || process.env.PORT
bookServer.listen(PORT,()=>{
    console.log(`__bookServer started at port ${PORT}__`);
})

//resolve api requests

bookServer.get('/',(req,res)=>{
    res.send(`<h2>bookServer started..</h2>`)
})
