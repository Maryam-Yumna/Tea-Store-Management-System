const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee.model");

//creating a new note and insert it into the database
router.route("/").post((req, res) => {
  const EmpFirstName = req.body.EmpFirstName;
  const EmpLastName = req.body.EmpLastName;
  const Address = req.body.Address;
  const Gender = req.body.Gender;
  const ContactNumber = req.body.ContactNumber;
  const Region = req.body.Region;
  const AvailableTime = req.body.AvailableTime;
  const JobType = req.body.JobType;

  const newEmployee = new Employee();

  newEmployee.EmpFirstName = EmpFirstName;
  newEmployee.EmpLastName = EmpLastName;
  newEmployee.Address = Address;
  newEmployee.Gender = Gender;
  newEmployee.ContactNumber = ContactNumber;
  newEmployee.Region = Region;
  newEmployee.AvailableTime = AvailableTime;
  newEmployee.JobType = JobType;

  newEmployee
    .save()
    .then(() => {
      res.json("Delivery Employee detail added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//retrieve the delivery employee details
router.route("/").get((req, res) => {
  Employee.find()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      console.log(err);
    });
});

//?id=${employeeId}&type=single
router.route("/employees_by_id").get((req, res) => {
  let type = req.query.type;
  let employeeIds = req.query.id;

  console.log("req.query.id", req.query.id);

  if (type === "array") {
    let ids = req.query.id.split(",");
    employeeIds = [];
    employeeIds = ids.map((EmpDetail) => {
      return EmpDetail;
    });
  }

  console.log("employeeIds", employeeIds);

  //find the employee information belongs to a product id
  Employee.find({ _id: { $in: employeeIds } })
    .populate("writer")
    .exec((err, employee) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(employee);
    });
});

module.exports = router;
