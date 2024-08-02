import express from "express";
import dotenv from "dotenv";



import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/recommendation.routes.js";
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectToMongoDB from "./db/connectToMongoDB.js";
import userRouter from "./routes/user.routes.js";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
console.log(__dirname)
dotenv.config();

const app = express();
app.use(cors());
const PORT =  process.env.PORT2 || 8000;

app.use(express.json()); 
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/userData",userRouter);






app.use(express.static(path.join(__dirname,'/client/dist')))

// app.get('*',(req, res)=>{
// 	res.sendfile(path.join(__dirname,"/client/dist/index.html"))
// })
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname,'/client','/dist','/index.html'));
  })
console.log(__dirname,'/client','/dist','/index.html')
app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});






