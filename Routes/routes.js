const express=require('express')


const router = new express.Router()
const user=require('../Logiccontrolls/userControl')

router.post('/user/register',user.register)

router.post('/user/login',user.login)

router.get('/user/user',user.getauser)

router.post('/books/post',user.post)

router.get('/books/getbooks',user.getbooks)

module.exports=router  