const mongoose=require("mongoose")

// connection string
mongoose.connect("mongodb://localhost:27017/Iroid",{
useNewUrlparser:true
})
// definig model
const USERS=mongoose.model('users',{
   
    name:String,
    email:String,

    
    password:String,
  
})
module.exports={
    USERS
}