const mongoose =require("mongoose")
const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Object}}]
},{timestamps:true})
const URL=mongoose.model("url-shortx",urlSchema);
module.exports=URL;