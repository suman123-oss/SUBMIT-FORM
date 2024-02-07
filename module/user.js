const mongoose= require("mongoose");

const userData= new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    pno:{
        type: Number
    }
})

const user = mongoose.model("user", userData);
module.exports= user;