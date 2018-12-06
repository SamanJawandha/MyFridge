var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/food/:foodid', ctrlMain.foodInfo);
router.post('/food/:foodid', ctrlMain.updateFoodInfo);
router.get('/addFood',ctrlMain.foodAdd);
router.post('/addFood', ctrlMain.foodAddDo);



module.exports = router;
