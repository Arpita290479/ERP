const mongoose = require('mongoose');

let teacherSchema = new mongoose.Schema({
    teacherID: String,
    name: String,
    email:  {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    password: String,
    designation: String,
    phone: String,
    image:String
    
},
{
    timestamps: true
})

module.exports = mongoose.model('teacherData', teacherSchema)
