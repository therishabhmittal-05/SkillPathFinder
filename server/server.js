// // const express = require('express');
// // const mongoose = require('mongoose');
// // require('dotenv').config();

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // Middleware
// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log('MongoDB connected'))
// // .catch(err => console.log(err));

// // // Routes
// // app.get('/', (req, res) => {
// //   res.send('MERN Stack API');
// // });

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import dotenv from "dotenv";



// import authRoutes from "./routes/auth.routes.js";
// import userRoutes from "./routes/recommendation.routes.js";
// import cors from 'cors'
// import cookieParser from 'cookie-parser'

// import connectToMongoDB from "./db/connectToMongoDB.js";
// import userRouter from "./routes/user.routes.js";
// import path from 'path';
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)
// console.log(__dirname)
// dotenv.config();

// const app = express();
// app.use(cors());
// const PORT =  process.env.PORT2;

// app.use(express.json()); 
// app.use(cookieParser());



// app.use("/api/auth", authRoutes);
// app.use("/api/user",userRoutes);
// app.use("/api/userData",userRouter);






// app.use(express.static(path.join(__dirname,'/client/dist')))

// app.get('*',(req, res)=>{
// 	res.sendfile(path.join(__dirname,"/client/dist/index.html"))
// })

// app.listen(PORT, () => {
// 	connectToMongoDB();
// 	console.log(`Server Running on port ${PORT}`);
// });



import express from "express";
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



