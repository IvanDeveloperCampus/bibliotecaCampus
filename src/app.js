import express from "express";
import dotenv from 'dotenv'
import autorRouter from "./Routers/autores.routes.js";

dotenv.config();

const app=express();
app.use(express.json())
app.use("/autor", autorRouter)

app.listen(5001, ()=>{
    console.log("server corriendo");
})