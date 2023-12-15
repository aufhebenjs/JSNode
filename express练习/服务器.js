let ex=require('express')
let fs=require('fs')
let app=ex()
app.get('/',(req,res)=>{
   let s= res.json('你好')
   console.log(s)
})
app.listen(80,()=>{
    console.log('http://127.0.0.1:80')
})