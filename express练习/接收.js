let mysql=require('mysql')
let express=require('express')
let fs=require('fs')
let cors=require('cors')
let app=express()
app.use(cors())
app.use(express.json()); 
//添加express自带的解析json中间件
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'diyi11/10',
  });

app.post('/book',(req,res)=>{
    console.log(req.body)
//    let xm=req.body.xm
//    console.log(xm)
if(req.body.xm=='李白'){
    res.json({
        aa:'收到VS的v',
        bb:'dsfsdfdsf'
    })
}
   
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})