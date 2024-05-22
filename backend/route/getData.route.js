const express = require('express');
const router = express.Router();


const getDataControllers = require('../controller/getData.controller.js')


router.get('/getTeacher/:id', getDataControllers.getTeacher)
router.get('/getAllTeacher', getDataControllers.getAllTeacher)
router.get('/getTeacherId/:id', getDataControllers.getTeacherId)
router.get('/getStudentById/:id', getDataControllers.getStudentById)
router.get('/getStuId/:stuId', getDataControllers.getStuId)
router.get('/getAllStudent', getDataControllers.getAllStudent)
router.get('/getSchool/:id', getDataControllers.getSchool)
router.get('/getAllSchool', getDataControllers.getAllSchool)
router.get('/getAdmin/:id', getDataControllers.getAdmin)




module.exports = router