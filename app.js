const express = require("express");
const mongoose= require("mongoose");
const path = require("path");

const app= express();
const port = 3000;


//require schema:
const user =require("./module/user");

//midleware:
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('./public'))

//connection to mongodb:
const conncetdb= mongoose.connect("mongodb://127.0.0.1:27017/userport").
then(()=>{
    console.log("database Connected")
}).catch((err)=>{
    console.log(err);
    console.log("database can't be connected");
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./index.html"))
})


app.post("/sign_up", async(req,res)=>{
    try {
    //store request data:
    const userData= new user(req.body)
    
    //save data in db:
    await userData.save();
    console.log('data saved in database');

    res.sendFile(path.join(__dirname, "/submit.html"));
    } catch (error) {
        console.log('error occoured', error);
    }
    
})

app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})