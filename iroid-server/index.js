// importing express fw
const express = require("express");

const jwt = require("jsonwebtoken");

// importing cors
const cors=require("cors")


const service = require("./services/service");




//  creating server app
const app = express();







app.use(cors({
    origin:"http://localhost:3001"
   }))
  

   // to parse json to js
app.use(express.json());







app.post("/register", (req, res) => {
    const result = service.register(
 
      req.body.name,
      
      req.body.email,
      req.body.pswd
      
    );
    
    
    result.then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    });
  });

  
// LOGIN API
app.post("/login", (req, res) => {
  const result = service.login(req.body.email, req.body.pswd);
  // res.status(result.statusCode).json(result)
  result.then((resobj) => {
    res.status(resobj.statusCode).send(resobj);
  });
});











  1// configuring port number for server app
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
  