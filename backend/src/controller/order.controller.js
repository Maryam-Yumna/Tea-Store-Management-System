const Order= require("../models/Ordermodel");

const addNewOrder = async (req, res) => {
  if (req.body) {
    const order = new Order(req.body);
    await order
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

const getOrders = async (req, res) => {
  await Order.find()
    .then((data) => {
      res.status(200).send(data);
      console.log("Success");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};


const updateOrder = async (req, res) => {
  let orderId = req.params.id;
  const {
    orderdate,
    firstName,
    email,
    phone,
    address,
    productName,
    price,
    qty,
    paymentMethod,
    paymentStatus,
    deliveryStatus,
  } = req.body;

  const updateOrder = {
    orderdate,
    firstName,
    email,
    phone,
    address,
    productName,
    price,
    qty,
    paymentMethod,
    paymentStatus,
    deliveryStatus,
  };

  const update = Order.findByIdAndUpdate(orderId, updateOrder)
    .then(() => {
      res.status(200).send({ status: "item updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with updating " });
    });
};

const getOrderByID = async (req, res) => {
    const id = req.params.id;
    await Order.findById(id)
      .then((order) => {
        res.status(200).send(order);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with get Order", error: err.message });
      });
  };

const getAwaitingPayments = async (req, res) => {
  let paymentStatus
  = req.params.paymentStatus
  ;
  Order.find({ paymentStatus
    : paymentStatus
}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  }).catch((err) => {
    console.log(err);
  });
};

const getAwaitingDelivery = async (req, res) => {
    let deliveryStatus
    = req.params.deliveryStatus
    ;
    Order.find({ deliveryStatus
        : deliveryStatus
    }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(docs);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  const PaidnDelivered = async (req, res) => {
    let deliveryStatus
    = req.params.deliveryStatus
    ;
    Order.find({ deliveryStatus
        : deliveryStatus
    }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(docs);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  const getordersForReport = async (req, res) => {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
   
    ;
    Order.find({
      orderdate: {
      $gte:startDate,
      $lte: endDate
  }, deliveryStatus
: "Delivered"

    }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(docs);
      }
    }).catch((err) => {
      console.log(err);
    });
  };




module.exports = {
    addNewOrder ,
    getOrders,
    getAwaitingPayments,
    getAwaitingDelivery,
    updateOrder,
    PaidnDelivered,
    getOrderByID,
    getordersForReport 

};
