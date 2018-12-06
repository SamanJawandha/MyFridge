var mongoose = require('mongoose');
var Foo = mongoose.model('Food');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/*GET api/food/ */
module.exports.foodList = function (req, res) {
    Foo.find(function(err, food) {
            if (err) {
                re.send(err);
            } else{
               res.json(food);
            }
    });
    //sendJsonResponse(res, 200, {"status" : "success"});
};

/*GET api/food/ */
module.exports.foodReadOne = function(req, res) {
    if (req.params && req.params.foodid) {
    Foo
        .findById(req.params.foodid)
        .exec(function(err, food) {
            if (!food) {
                sendJsonResponse(res, 404, {
                    "message": "foodid not found"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
        sendJsonResponse(res, 200, food);
    });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No foodid in request"
        });
    }
};

/*POST api/food/ */
module.exports.foodCreate = function(req, res) {
    Foo.create({
        name: req.body.name,
        date: req.body.date,
        expiry: req.body.expiry,
        left_overs: req.body.left_overs,
        quantity: req.body.quantity
    },function(err, food){
        if(err){
            console.log(err);
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 200, food);
        }
    });
};


/* PUT api/food/ */
module.exports.foodUpdateOne = function(req, res) {
  if (!req.params.foodid) {
    sendJsonResponse(res, 404, {
      "message": "Not found, foodid is required"
    });
    return;
  }
  Foo
    .findById(req.params.foodid)
    .exec(
      function(err, food) {
        if (!food) {
          sendJsonResponse(res, 404, {
            "message": "foodid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        food.name = req.body.name;
        food.date = req.body.date;
        food.expiry = req.body.expiry;
        food.left_overs = req.body.left_overs;
        food.quantity = req.body.quantity;
        
        food.save(function(err, food) {
          if (err) {
            sendJsonResponse(res, 404, err);
          } else {
            sendJsonResponse(res, 200, food);
          }
        });
      }
  );
};

/* DELETE /api/food/:foodid */
module.exports.foodDeleteOne = function(req, res) {
  var foodid = req.params.foodid;
  if (foodid) {
    Foo
        .findById(foodid)
      .exec(
    function(err, food){
        if(!food){
            sendJsonResponse(res, err, "Fail to delete");
            return;
        }else if (err){
            sendJsonResponse(res, 404, err);
            return;
        }
        if(food.quantity > 1){
            food.quantity = food.quantity -1;
            food.save(function(err,food){
                if (err) {
                    sendJsonResponse(res, 404, err);
                } else {
                    sendJsonResponse(res, 200, food);
                }
            });
        }else{
            Foo
            .findByIdAndDelete(foodid)
            .exec
        (function(err, food) {
          if (err) {
            console.log(err);
            sendJsonResponse(res, 404, err);
            return;
          }else{
            console.log("Food id " + foodid + " deleted");
            sendJsonResponse(res, 200, food);}
        });
        }
    });
}
}






