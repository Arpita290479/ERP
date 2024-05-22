const studentModel = require("../models/student.model")
const teacherModel = require("../models/teacher.model")

exports.updateStudent = async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await studentModel.findByIdAndUpdate(id, newData, { new: true })
    res.send("data updated")
}

exports.updateTeacher = async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await teacherModel.findByIdAndUpdate(id, newData, { new: true })
    res.send("data updated")
}