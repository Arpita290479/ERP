const mongoose = require('mongoose');


let schoolSchema = new mongoose.Schema({
    schoolId:String,
    name: String,
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    phone: String,
    address: String,
    image:String
    
})


module.exports= mongoose.model('schoolData', schoolSchema)
