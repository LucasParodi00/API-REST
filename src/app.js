

import express from "express";
import morgan from "morgan";

//ROUTES 
import router from "./routes/productos.router";


export const app = express ();

app.set ("port", 4000);

// Middlewares
app.use (morgan ("dev"));
app.use (express.json())

//Routes 
app.use ("/api/producto", router);

