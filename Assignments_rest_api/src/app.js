import express from "express";
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded(
    { extended: true 
        ,
        limit:"16kb"
    }));


import router  from "./routes/book.routes.js";
app.use("/rest-api/book",router);

export {app}