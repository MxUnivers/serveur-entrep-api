
const  mongoose = require("mongoose");

const  MarqueSchema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        coverPicture:{
            type:String,
            required:true,
        }
    },{timestamps:true}
)

const  Marque = mongoose.model("marque",MarqueSchema);

module.exports = Marque;