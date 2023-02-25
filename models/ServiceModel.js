

const  mongoose = require("mongoose");

const  ServiceSchema =  new mongoose.Schema(
    {
        name:{
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
        visible:{
            type:Boolean , 
            default:true,
            required:false
        },
    },{timestamps:true}
)

const  Service = mongoose.model("service",ServiceSchema);

module.exports = Service;