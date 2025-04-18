import mongoose from "mongoose";

const DB_NAME = "REST_API_TUTORIAL";

const connectDB  = async ()=>{
try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("\n MongoDB Connected !! DB Connected");
}
catch (error){
     console.log("Connection error",error);
     process.exit(1); 
}

}


export default connectDB ;