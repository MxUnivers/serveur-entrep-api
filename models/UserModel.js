

const  mongoose = require("mongoose");



const  UserSchema =  new mongoose.Schema(
    {
        username:{
            type:String,
            required:false,
            unique:true
        },
        firstname:{
            type:String,
            required:false,
        },
        lastname:{
            type:String,
            required:false
        },
        email:{
            type:String,
            required:false
        },
        telephone:{
            type:String,
            required:false
        },
        coverPicture:{
            type:String,
            required:false
        },
        description:{
            type:String,
            required:false
        },
        typeUser:{
            type:Number,
            required:false,
            default:3
        },
        resetPass:{
            type:String,
            required:false
        },
        password:{
            type:String,
            required:false
        },
        access:{
            type:Boolean,
            default:true,
            required:false
        },
        token:{
            type:String,
            required:false
        },
        status:{
            type:String,
            required:false,
            default:"trashed"
        }
        
    },{  timestamps:true }

);



const  User = mongoose.model("userapp",UserSchema);

module.exports = User ;