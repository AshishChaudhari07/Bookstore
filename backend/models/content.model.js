import mongoose from 'mongoose'

const contentSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
})

const Content = mongoose.model("content",contentSchema);

export default Content;