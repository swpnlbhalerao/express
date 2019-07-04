
const mongoose=require('mongoose');
var url='mongodb://localhost:27017/mongodb_local';
mongoose.connect(url,{useNewUrlParser:true}, (error)=>{
        if(!error)
        console.log("Connected Successfully");
        else
        console.log("Error message "+error.message);
    
});


require('./employee.model'); 