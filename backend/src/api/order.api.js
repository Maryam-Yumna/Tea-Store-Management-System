const express = require("express");
const router = express.Router();
const controller = require("../controller/order.controller");

module.exports = function () {
  router.post("/newOrder", controller.addNewOrder);
  router.get("/awaitingpayments/:paymentStatus", controller.getAwaitingPayments);
  router.get("/awaitingdelivery/:deliveryStatus", controller.getAwaitingDelivery);
  router.get("/allOrders", controller.getOrders);


  return router;
};
