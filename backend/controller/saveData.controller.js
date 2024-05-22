const studentModel = require('../models/student.model.js')
const teacherModel = require('../models/teacher.model.js')
const adminModel = require('../models/admin.model.js')
const schoolModel = require('../models/school.js')

exports.saveStudent =  (req, res) => {
    let finalPass = new studentModel({
        studentID: req.body.studentID,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        standard: req.body.standard,
        section: req.body.section,
        phone: req.body.phone})
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}
exports.saveTeacher =  (req, res) => {
    let finalPass = new teacherModel({
        teacherID:req.body.teacherID,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        designation: req.body.designation,
        phone: req.body.phone})
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}
exports.saveAdmin =  (req, res) => {
    let finalPass = new adminModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        designation: req.body.designation,
        phone: req.body.phone,
        image: req.file.filename})
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}
exports.saveSchool =  (req, res) => {
    let finalPass = new schoolModel({
        schoolID:req.body.schoolID,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        image: req.file.filename
        })
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}