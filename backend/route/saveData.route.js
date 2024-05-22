const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const saveController = require('../controller/saveData.controller.js')

router.post('/saveStudent', saveController.saveStudent)
router.post('/saveTeacher', saveController.saveTeacher)
router.post('/saveAdmin',upload.single('image'), saveController.saveAdmin)
router.post('/saveSchool', saveController.saveSchool)



module.exports = router