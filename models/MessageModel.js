

const  mongoose = require("mongoose");

let  date  = new Date();
const  MessageSchema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:false,
            default:true
        },
        email:{
            type:String,
            required:false,
            default:true
        },
        subject:{
            type:String,
            required:false,
            default:""
        },
        content:{
            type:String,
            required:false,
            default:""
        },
        dateNow:{
            type:String,
            required:false,
            default:`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        },
        hourNow:{
            type:String,
            required:false,
            default:`${date.getHours()}:${date.getMinutes()}`
        }
    }
    ,
    {
        timestamps:true
    }
)

const  Message = mongoose.model("contact_message",MessageSchema);

module.exports = Message ;