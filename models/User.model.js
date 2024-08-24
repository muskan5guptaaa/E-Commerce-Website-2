const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    email:{
        type:String,
        trim:true,
        required:true
    }
})





let User = mongoose.model('User' , userSchema);
module.exports = User;