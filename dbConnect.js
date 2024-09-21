const mongoose=require('mongoose');
const url='mongodb+srv://Aditya321:hello321@adityacluster11.iwophqu.mongodb.net/ResumeNewDatabase';
 mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
const  connection=mongoose.connection
connection.on('connected',()=>{
    console.log('mongoDb connection successful');
})
connection.on('error',(error)=>{
console.log(error);
})