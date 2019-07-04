require('./models/mongoose_db');
const employeeController=require('./controller/employee.controller');
const express=require('express');
const employeeRoutes=require('./routes');
const bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));



app.listen(3000,()=>{
console.log("connection started on port 3000");
})


//app.use('/employees',employeeController);
  
app.use('/', employeeRoutes);


