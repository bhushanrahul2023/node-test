const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const {json,urlencoded}=express;
const app=express();
app.use(json());

mongoose.connect("mongodb://bhushanrahul:rahulbhushan2000@ac-7zqme8i-shard-00-00.j4arj5b.mongodb.net:27017,ac-7zqme8i-shard-00-01.j4arj5b.mongodb.net:27017,ac-7zqme8i-shard-00-02.j4arj5b.mongodb.net:27017/?ssl=true&replicaSet=atlas-12b3y2-shard-0&authSource=admin&retryWrites=true&w=majority",()=>console.log("server is running"));
app.use(urlencoded({extended:false}));
app.listen(4000,()=>console.log("server is running at port 4000"));