const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required : true
    },
    username : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true,
        unique:true
    },
    gender : {
        type:String,
        required : true
    },
    dob : {
        type:Number,
        required : true
    }
})

// now we create collecation

const Register = new mongoose.model("Register", employeSchema);

module.exports= Register;