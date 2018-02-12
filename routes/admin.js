var express = require('express');
var router = express.Router();
var orders = require('restaurantOrders');

router.use (function(req, res, next){
  if (req.query.token == 'admin'){
    next();
  } else  {
    res.status(401).send({message:'Permission denied. Admin only'});
  }
});

router.get('/', function(req, res){
  res.status(200).json(orders.getOrders());
})

router.get('/profit', function(req, res){
  res.status(200).json(orders.getProfit());
})

router.get('/orderbystatus', function(req, res){
  res.json({message: 'List of orders by status:'});
  res.status(200).json(orders.getOrdersbyStatus(req.params.status));
})


router.delete('/:table',  function(req, res) {
    orders.deleteOrder(parseInt(req.params.table));
    res.json({message: 'order deleted'});
})

router.put('/:code', function(req, res){
  orders.setOrder(parseInt(req.params.code), req.query.status);
  res.status(201).json({message: 'status order updated'});
})

module.exports = router;
