

const  mongoose = require("mongoose");


let date   =  new Date();
const  BlogSchema =  new mongoose.Schema(
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
        content:{
            type:String,
            required:false,
        },
        visible:{
            type:Boolean ,
            default:true,
            required:false
        },
        // date sauvegarder
        datesave:{
            type:String,
            required:false,
            default:`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        },
        // heure d 'enregistrement 
        hoursave:{
            type:String,
            required:false,
            default:`${date.getHours()}:${date.getMinutes()}`
        },
    },{timestamps:true}
)

const  Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;