require('events').EventEmitter.defaultMaxListeners = 20; // Increase the limit to 20 or higher
const express=require('express');
const app=express();

app.get('/add',(req,res)=>{
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    res.send(`result is : ${a+b}`)
});

app.get('/sub',(req,res)=>{
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    res.send(`result is ${a-b}`)
});

app.get('/mul',(req,res)=>{
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);

    res.send(`result is : ${a*b}`)
});

app.get('/div',(req,res)=>{
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    if(b==0){
        res.send('error : division by zero')
    }
    else{
        res.send(`result is :${a/b}`);
    }
});

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});