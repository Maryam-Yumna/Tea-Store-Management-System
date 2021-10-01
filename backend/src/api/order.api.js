const express = require("express");
const router = express.Router();
const controller = require("../controller/order.controller");

module.exports = function () {
  router.post("/newOrder", controller.addNewOrder);
  router.get("/awaitingpayments/:paymentStatus", controller.getAwaitingPayments);
  router.get("/awaitingdelivery/:deliveryStatus", controller.getAwaitingDelivery);
  router.get("/PaidandDelivered/:deliveryStatus", controller.PaidnDelivered);
  router.get("/allOrders", controller.getOrders);
  router.put("/updateOrder/:id", controller.updateOrder);
  router.get("/getOrder/:id", controller.getOrderByID);
  router.get("/getIncome/:startDate/:endDate" ,controller.getordersForReport);


  return router;
};
