const mongoose = require('mongoose');
const authUserSchema = {
name:{type:String, required:true},
email:{type:String, required:true},
password:{type:String, required:true}
}
const AuthUserModel = mongoose.model("authuser", authUserSchema)
module.exports={AuthUserModel}