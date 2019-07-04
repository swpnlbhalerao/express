const Employee = require('../models/employee.model');

//const Employee = exports.Employee;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.delete = function (req, res) {
    Employee.findByIdAndRemove(req.params.id)
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });
        }
        res.send({message: "Employee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Employee with id " + req.params.id
        });
    });
};

exports.findOne = function (req, res) {

    console.log(req.params.id);
    req_id=req.params.id;
    Employee.findById(req_id)
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });            
        }
        res.send(employee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving  with id " + req.params.id
        });
    });
};


exports.findAll = function (req, res) {
    Employee.find()
        .then(employee => {
            res.send(employee);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employees."
            });
        });


};

exports.createUpdate = function (req, res) {
    // res.send('Greetings from the Test controller!');
console.log(req.body);
    if (!req.body) {
        return res.status(400).send({
            message: "Employee content can not be empty"
        });
    }
    var id = req.body.id
    console.log(id);
    if ( !id || id != 0) {
        console.log("inside Update");
        Employee.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            dept: req.body.dept
        }, {new: true})
        .then(employee => {
            if(!employee) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.body.id
                });
            }
            res.send(employee);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employee not found with id " + req.body.id
                });                
            }
            return res.status(500).send({
                message: "Error updating employee with id " + req.body.id
            });
        });
    } else {
        // Create a inside create employee
        console.log("inside create");
        const employee = new Employee({
            id: req.body.id,
            name: req.body.name,
            dept: req.body.dept
        });

        // Save employee  in the database
        employee.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the employee."
                });
            });
    }
};



