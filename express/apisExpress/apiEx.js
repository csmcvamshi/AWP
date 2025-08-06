const express=require('express')
const fs= require('fs')
const app = express()
const port = 3000
const stu = require('./students.json')
const bp = require('body-parser')

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.get('/',(req,res)=>{
    res.send("<h3> welcome to server <h3>");
});

app.get('/list',(req,res)=>{
    fs.readFile('students.json',(err,data)=>{
        res.send(data);
    })
});

app.post('/',(req,res)=>{
    newStu= req.body;
    stu.push(newStu);
    mywrite(stu);
    res.send("student added");
});

function mywrite(data){
    fs.writeFile('students.json',JSON.stringify(data),(err)=>{})
}

app.put('/',(req,res)=>{
    upStu=req.body;
    for (s in stu){
        if(stu[s]['roll']==upStu[s]['roll']){
            st[s]['name']=upStu['name'];
            mywrite(stu);
            res.send("student updated");
        }
    }
});

app.delete("/",(req,res)=>{
    delStu=req.body;;
    for (s in stu){
        if(stu[s]['roll']==delStu['roll']){
            stu.splice(s,1);
            mywrite(stu);
            res.send("student deleted");
    }
}
})

app.listen(port,()=>{console.log("server running at port 3000")})