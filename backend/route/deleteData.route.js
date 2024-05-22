const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')
const deleteDataController = require('../controller/deleteDataControllers.js')

router.delete('/deleteStudent/:id', deleteDataController.deleteStudent)
router.delete('/deleteTeacher/:id', deleteDataController.deleteTeacher)
router.delete('/deleteSchool/:id', deleteDataController.deleteSchool)

module.exports = router