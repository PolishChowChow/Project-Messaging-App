import express from "express"
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes";
const port = process.env.PORT || 3000
const app = express();
mongoose.connect(process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/", {
    dbName: process.env.DB_NAME || "MessagingAppDatabase"
})

app.use("/auth", authRouter)
app.listen(port, () => console.log(`server listeling on port ${port}`))