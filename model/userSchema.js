const mongoose = require('mongoose');
const  userSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.String,
        require: true
    },
    email:{
        type:mongoose.Schema.Types.String,
        require:true
    },
    password:{
        type:mongoose.Schema.Types.String,
        require:true
    },
    username:{
        type:mongoose.Schema.Types.String,
        require:true
    },
    phone:{
        type:mongoose.Schema.Types.Number,
        require:true
    },
    createdAt:{
        type:mongoose.Schema.Types.String,
        require:true
    },
    updatedAt:{
        type:mongoose.Schema.Types.String,
        require:true
    }


})

module.exports=mongoose.model("user",userSchema);