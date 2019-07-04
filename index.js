const sql = require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json());

var sqlConnectiion = sql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'quantiphi_local',
        multipleStatements:true
    }
)

sqlConnectiion.connect((error)=>{
    if(!error){
        console.log("connection succeed");
    }else{
        console.log(error.sqlMessage);
    }
})



app.listen(3000,()=>{
   console.log("listening on port 3000") 
});


app.get('/employees',(req,res)=>{
    console.log('inside request')
    sqlConnectiion.query('select * from employee',(err,rows,fields)=>{
    if(!err){
        //console.log(rows[0].id);
       // console.log(fields);
        res.send(rows);
    }else{
        console.log(err);
    }
    })
});
//get details my employtee id
app.get('/employees/:id',(req,res)=>{
    console.log('inside request')
    sqlConnectiion.query('select * from employee where id=?',[req.params.id],(err,rows,fields)=>{
    if(!err){
        //console.log(rows[0].id);
       // console.log(fields);
        res.send(rows);;
    }else{
        console.log(err);
    }
    })
});


//dekete by employtee id
app.delete('/employees/:id',(req,res)=>{
    console.log('inside request')
    sqlConnectiion.query('Delete from employee where id=?',[req.params.id],(err,rows,fields)=>{
    if(!err){
        //console.log(rows[0].id);
       // console.log(fields);
        res.send("deleted Successfully")
        
        
    }else{
        console.log(err);
    }
    })
});


app.post('/employees/addEditEmployee',(req,res)=>{
    let emp=req.body;
    console.log('inside addedit post request')
     var sql ="Set @id=?;Set @name=?; Set @dept=?; \
             call add_edit_Employee(@id,@name,@dept);"
    sqlConnectiion.query(sql,[emp.id,emp.name,emp.dept],(err,rows,fields)=>{
    if(!err){
        //console.log(rows[0].id);
       // console.log(fields);
        res.send(rows);
        
        
    }else{
        console.log(err);
    }
    })
});

