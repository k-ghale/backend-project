// require('dotenv').config({path: './env'});

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed!!",err);
})

// Another method to connect DB
/*
(async () => {
    try {
       mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 
       app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
       })

       app.listen(process.env.PORT, () =>{
       console.log(`App listenning on PORT:${process.env.PORT}`);})
        
    } catch (error) {
       console.log("ERROR", error)
       throw error
    }


})()*/

