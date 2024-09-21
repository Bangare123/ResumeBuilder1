const express = require('express');
const app = express();
const dbConnect=require('./dbConnect');
const port =5000 || process.env.PORT;
app.use(express.json());
const userRoute=require('./routes/userRoute');
// http://expressjs.com/en/starter/basic-routing.html
app.use('/api/user/',userRoute);
 

// listen for requests :)
 
app.get('/',(req,res)=>{
  res.send('Hello Word');
})
  app.listen(port,  ()=> {
  console.log(`Your app is listening on port${port}`);
});