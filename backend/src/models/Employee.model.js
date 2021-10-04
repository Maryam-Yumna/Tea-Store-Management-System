const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  EmpID: {
    type: String,
    required: true,
  },
  EmpFirstName: {
    type: String,
    required: true,
  },
  EmpLastName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  Region: {
    type: String,
    required: true,
  },
  AvailableTime: {
    type: String,
    required: true,
  },
  JobType: {
    type: String,
    required: true,
  },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
