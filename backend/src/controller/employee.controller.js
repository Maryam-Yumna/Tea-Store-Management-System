const Employee = require("../models/Employee.model");

const addNewEmployee = async (req, res) => {
  if (req.body) {
    const employee = new Employee(req.body);
    await employee
      .save()
      .then((data) => {
        res.status(200).send(data);
        console.log("Insereted Success");
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  }
};

const getAllEmployees = async (req, res) => {
  await Employee.find()
    .then((data) => {
      res.status(200).send(data);
      console.log("Success");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

const getEmployeeByID = async (req, res) => {
  const id = req.params.id;
  await Employee.findById(id)
    .then((EmpDetail) => {
      res.status(200).send(EmpDetail);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get product", error: err.message });
    });
};

const updateEmployee = async (req, res) => {
  let employeeId = req.params.id;
  const {
    EmpFirstName,
    EmpLastName,
    Address,
    Gender,
    ContactNumber,
    Region,
    AvailableTime,
    JobType,
  } = req.body;

  const updateEmployee = {
    EmpFirstName,
    EmpLastName,
    Address,
    Gender,
    ContactNumber,
    Region,
    AvailableTime,
    JobType,
  };

  const update = Employee.findByIdAndUpdate(employeeId, updateEmployee)
    .then(() => {
      res.status(200).send({ status: "Delivery Employee details updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with updating " });
    });
};

const deleteEmployee = async (req, res) => {
  let EmpDetailId = req.params.id;
  await Employee.findByIdAndDelete(EmpDetailId)
    .then(() => {
      res.status(200).send({ status: "item deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with deleting" });
    });
};

module.exports = {
    addNewEmployee,
    getAllEmployees,
    getEmployeeByID,
    updateEmployee,
    deleteEmployee
};
