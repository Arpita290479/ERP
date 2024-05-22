const adminModel = require('../models/admin.model.js')
const studentModel = require('../models/student.model.js')
const teacherModel = require('../models/teacher.model.js')
const schoolModel = require('../models/school.js')

exports.deleteStudent =  async (req, res) => {
    let id = req.params.id
    console.log(id)
    await studentModel.findByIdAndDelete({_id:id})
    res.send("deleted ")
}
exports.deleteTeacher =  async (req, res) => {
    let id = req.params.id
    console.log(id)
    await teacherModel.findByIdAndDelete({_id:id})
    res.send("deleted ")
}
exports.deleteSchool =  async (req, res) => {
    let id = req.params.id
    console.log(id)
    await schoolModel.findByIdAndDelete({_id:id})
    res.send("deleted ")
}