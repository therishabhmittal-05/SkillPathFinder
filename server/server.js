// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Routes
// app.get('/', (req, res) => {
//   res.send('MERN Stack API');
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/recommendation.routes.js";
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectToMongoDB from "./db/connectToMongoDB.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT =  8000;

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/userData",userRouter);


app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});