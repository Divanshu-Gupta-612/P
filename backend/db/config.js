const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://divanshugupta924:<password>@cluster0.lrdyr6o.mongodb.net/').then(()=>{
    console.log("done connection")
}).catch((err)=>{
    console.error(err);
})

const scheme = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
})

const userModel = mongoose.model('users', scheme);
module.exports = userModel;