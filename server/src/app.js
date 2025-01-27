import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true,
}))


app.use(express.json({limit : "1000kb"}))
app.use(express.urlencoded({extended:true,limit : "1000kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// import routes
import profileRoutes from "./routes/Profile.route.js";
import contactRoutes from "./routes/Contacts.route.js";

//route declaration
app.use("/api/chatz/profiles",profileRoutes);
app.use("/api/chatz/contacts",contactRoutes);


export {app};