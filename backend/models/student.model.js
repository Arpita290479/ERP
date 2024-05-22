const mongoose = require('mongoose');


let studentSchema = new mongoose.Schema({
    studentID: String,
    name: String,
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    password: String,
    standard: String,
    section: String,
    phone: String,
    image:String
})


module.exports= mongoose.model('studentData', studentSchema)
