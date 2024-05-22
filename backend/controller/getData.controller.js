const adminModel = require('../models/admin.model.js')
const studentModel = require('../models/student.model.js')
const teacherModel = require('../models/teacher.model.js')

exports.getStudentById =async (req, res)=>{
    let id = req.params.id
    let result = await studentModel.find({_id:id})
    res.json(result)
}
exports.getStuId =async (req, res)=>{
    let stuId = req.params.stuId
    let result = await studentModel.find({studentID:stuId})
    res.json(result)
}
exports.getAllStudent =async (req, res)=>{
  
    let result = await studentModel.find({})
    res.json(result)
}
exports.getTeacherId =async (req, res)=>{
    let id= req.params.id
    let result = await teacherModel.find({_id:id})
    res.json(result)
}
exports.getTeacher =async (req, res)=>{
    let id = req.params.id
    let result = await teacherModel.find({_id:id})
    res.json(result)
}
exports.getAllTeacher =async (req, res)=>{
  
    let result = await teacherModel.find({})
    res.json(result)
}
exports.getAdmin =async (req, res)=>{
    let id = req.params.id
    let result = await adminModel.find({_id:id})
    res.json(result)
}
exports.getAllAdmin =async (req, res)=>{
  
    let result = await adminModel.find({})
    res.json(result)
}
exports.getSchool =async (req, res)=>{
    let id = req.params.id
    let result = await schoolModel.find({_id:id})
    res.json(result)
}
exports.getAllSchool =async (req, res)=>{
  
    let result = await adminModel.find({})
    res.json(result)
}