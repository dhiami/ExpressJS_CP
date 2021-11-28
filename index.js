const express = require('express')
const app = express()

app.use(express.static('public'))

const path=require('path')
const date = new Date();
const day=date.getDay()
const hour=date.getHours()

app.use((req, res, next) => {
   if (day >= 1 && day <= 5 && hour >= 10 && hour < 17) {
     next();
   } else {
         res.sendFile(__dirname + '/closed.html')
   }
 });

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
})

app.get('/ourServices',(req,res)=>{
    res.sendFile(__dirname+'/Our Services.html')
})

app.get('/Contactus',(req,res)=>{
    res.sendFile(__dirname+'/Contact us.html')
})

const port=5000
app.listen(port,(err)=>{
    err? console.log(err) : console.log('The server is connected to ${port}')
})