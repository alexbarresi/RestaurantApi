var express = require('express');
var router = express.Router();
var orders = require('restaurantOrders');

var clients = [
  'pippo',
  'caio',
  'sempronio'
];

router.use (function(req, res, next){
  if (clients.indexOf(req.query.token)!=-1){
    next();
  } else {
    res.status(401).send({message:'Permission denied. Client not authorized'});
  }
});

router.post ('/addOrder', function(req,res){
  res.status(201).json({message: 'order added'});
  res.json(orders.addOrder(req.body));

})


module.exports = router;
