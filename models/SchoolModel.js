

const  mongoose = require("mongoose");

const  ShcoolSchema =  new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description: {
            type:String,
            required:false
        },
        coverPicture:{
            type:String,
            required:false
        },
        video:{
            type:String,
            required:false
        },
        audio:{
            type:String,
            required:false
        },
        visible:{
            type:Boolean , 
            default:true,
            required:false
        },
    },{timestamps:true}
)

const  School = mongoose.model("enseignement",ShcoolSchema);

module.exports = School;