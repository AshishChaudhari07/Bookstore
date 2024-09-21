import mongoose from "mongoose";

const mdUri = process.env.MONGODBURI || "mongodb://localhost:27017/bookStore";

const dbConnection = async()=>{
        await mongoose.connect(mdUri)
        .then(()=>console.log("mongodb connected"))
        .catch((err)=>console.log("error",err))
}

export default dbConnection;