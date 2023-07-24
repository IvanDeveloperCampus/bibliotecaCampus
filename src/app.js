import express from "express";
import dotenv from 'dotenv'
import autorRouter from "./Routers/autores.routes.js";
import categoriaRouter from "./Routers/categoria.routes.js";

dotenv.config();

const app=express();
app.use(express.json())
app.use("/autor", autorRouter)
app.use('/categoria', categoriaRouter)

app.listen(5001, ()=>{
    console.log("server corriendo");
})