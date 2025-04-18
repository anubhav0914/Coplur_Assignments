import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log('error',err)
        throw err
    })
    app.listen(process.env.PORT || 8001, ()=>{
       console.log(`server is running on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`database connection failed`,err)
})