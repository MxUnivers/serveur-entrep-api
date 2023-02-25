

const  mongoose = require("mongoose");

const  TemoinSchema =  new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:true,
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

const  Temoin = mongoose.model("temoins",TemoinSchema);

module.exports = Temoin ;