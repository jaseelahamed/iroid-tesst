const jwt = require("jsonwebtoken");

const db = require("./db");


const register = ( name,email, password) => {
  return db.USERS.findOne({
    email
  }).then((acc) => {
    console.log(acc);
    if (acc) {
      return {
        status: false,
        message: "Account Already exists!!......please login",
        statusCode: 404,
      };
    } else {
      let accr = new db.USERS({
      
        name: name,
        email:email,
        password: password,
        
      });
      accr.save();
      return {
        status: true,
        message: "Registration completed!!",
        statusCode: 201,
      };
    }
  });
};


const login = (email, pswd) => {
  return db.USERS.findOne({
    email:email,
    password: pswd,
  }).then((res) => {
    console.log(res + "from login in ds");
    if (res) {
    
        currentUser = res.email;
        currentUsername=res.name
    console.log(res.email)
   
    
          token=jwt.sign(
            {currentUser:email},"secretsuperkey1234"
           
          )
          console.log(token)

      return {
        status: true,
        message: "Login successfull",
        statusCode: 200,
        currentUsername,
        currentUser,
      
        token,
      };
    } else {
      return {
        status: false,
        message: "invalid password or account number",
        statusCode: 400,
      };
    }
  });
};





  
  module.exports = {
    register,
    login
 
    

   
  };
  