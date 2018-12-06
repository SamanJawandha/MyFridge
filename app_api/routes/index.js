var express = require('express');
var router = express.Router();
var ctrlFood = require('../controllers/food');


router.get('/food', ctrlFood.foodList);
router.get('/food/:foodid', ctrlFood.foodReadOne);
router.post('/food', ctrlFood.foodCreate);
router.put('/food/:foodid', ctrlFood.foodUpdateOne);
router.delete('/food/:foodid', ctrlFood.foodDeleteOne);

module.exports = router;
