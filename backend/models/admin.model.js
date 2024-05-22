const mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({
    email:  {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    password: String,
    name: String,
    designation: String,
    phone: String,
    image:String
    
},
{
    timestamps: true
})

module.exports = mongoose.model('adminData', adminSchema)
