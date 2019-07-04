const mongoose=require('mongoose');

var employeeSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    dept:{
        type:String
    }/* ,doj:{
        type:Date
    }, */
});

module.exports=mongoose.model('Employee',employeeSchema);