

const  mongoose = require("mongoose");

const  VideoIntroSchema =  new mongoose.Schema(
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
        visible:{
            type:Boolean ,
            default:true,
            required:false
        },
    },{timestamps:true}
)

const  VideoIntro = mongoose.model("videointro",VideoIntroSchema);

module.exports = VideoIntro;