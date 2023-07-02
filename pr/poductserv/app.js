//import lib
const express=require('express')
const app=express();
const cors=require('cors')
const bodyparser=require('body-parser')
const router=require('../poductserv/router/router')

//middd

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//cors
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

//url han
app.use('/',router);

//start serv
app.listen(3002,()=>{
    console.log('running on 3002')
})

//export
module.exports=app;