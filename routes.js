const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employeeController=require('./controller/employee.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', employeeController.test);

router.post('/createUpdate', employeeController.createUpdate);

router.get('/employees', employeeController.findAll);

router.get('/employees/:id',employeeController.findOne);

router.post('/deleteEmployee/:id',employeeController.delete);
//put and post







module.exports = router;