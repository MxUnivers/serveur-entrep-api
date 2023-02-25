

const  mongoose = require("mongoose");

const  ClientSchema =  new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:true,
        },
        telephone:{
            type:String,
            required:false,
        },
        email:{
            type:String,
            required:false,
        },
        coverPicture:{
            type:String,
            required:false,
        },
        description:{
            type:String,
            default:"responsable de ",
            required:false
        },
    }
    ,
    {
        timestamps:true
    }
)

const  Client = mongoose.model("client_entrep",ClientSchema);

module.exports = Client ;