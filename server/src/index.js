import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './db/index.js';
import {app} from './app.js';



dotenv.config({
    path: './env'
});

connectDB()
.then(() => { 
    try {
        app.listen(process.env.PORT||8000)
        console.log(`Server is listening on port ${process.env.PORT}` );
    } catch (error) {
        app.on("error",(error) => {
            console.log("ERROR:",error);
            throw error
        })
    }
    
})
.catch((err) => { 
    console.log("Mongo DB connection failed",err);
    
})

