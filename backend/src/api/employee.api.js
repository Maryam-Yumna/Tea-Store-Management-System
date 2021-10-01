const express = require("express");
const router = express.Router();
const controller = require("../controller/employee.controller");

module.exports = function () {
  router.post("/newEmployee", controller.addNewEmployee);
  router.get("/", controller.getAllEmployees);
  router.get("/:id", controller.getEmployeeByID);
  router.put("/updateEmployee/:id", controller.updateEmployee);
  router.delete("/deleteEmployee/:id", controller.deleteEmployee);

  return router;
};
