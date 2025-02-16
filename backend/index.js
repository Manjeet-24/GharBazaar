import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: "https://gharbazaar.netlify.app",
    credentials: true
}

// database connection
mongoose.set("strictQuery", false);
const connect = async()=>{
    try {
            await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
        });

        console.log("Database connected");
    } catch (err) {
        console.log("database connection failed");
    }
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);


app.listen(port, ()=> {
    connect();
    console.log("server is running on port", port);
});
