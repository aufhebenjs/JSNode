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


  app.post('/lai',(req,res)=>{
    console.log(req.body.xm)
    res.json({
        xm:req.body.xm
    })
  })

  app.listen(80,()=>{
    console.log('http://127.0.0.1')
  })