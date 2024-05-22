const express = require('express');
const router = express.Router();


const updateController = require('../controller/updateDataController.js')

router.put('/updateStudent/:id', updateController.updateStudent)
router.put('/updateTeacher/:id', updateController.updateTeacher)


module.exports = router