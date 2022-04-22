var express = require('express');
var router = express.Router();

const CarController = require('../controller/CarController')

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', CarController.getCar);
router.get('/index/:id', CarController.getOneCar);
router.post('/index/register', CarController.addCar);
router.put('/index/:id', CarController.updateCar);
router.delete('/index/:id', CarController.deleteCar);


module.exports = router;
