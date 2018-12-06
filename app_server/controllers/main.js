var request = require('request');
var apiOptions = {
server : "http://localhost:3000"
};

var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};


var renderHomepage = function(req, res, responseBody){
  var message;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No food found ";
    }
  }
  res.render('food-list', {
    title: 'MyFridge - find a food',
    pageHeader: {
      title: 'MyFridge',
      strapline: 'Find places to eat near you!'
    },
    sidebar: "Looking for food and a drink? My Fridge helps you find food to eat. Let My Fridge help you find the food you're looking for.",
    foods: responseBody,
    message: message
  });
};


/* GET home page */
module.exports.index = function(req, res){
    var requestOptions, path;
  path = '/api/food';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data;
      data = body;
      renderHomepage(req, res, data);
    }
  );
};




var getFoodInfo = function (req, res, callback) {
  var requestOptions, path;
  path = "/api/food/" + req.params.foodid;
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
      if (response.statusCode === 200) {
        callback(req, res, data);
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
};

var renderDetailPage = function (req, res, fooDetail) {
  res.render('food-info', {
    title: fooDetail.name,
    pageHeader: {title: fooDetail.name},
    sidebar: {
      context: 'find food from my fridge.',
    },
    foods: fooDetail
  });
};

/* GET 'food info' page */
module.exports.foodInfo = function(req, res){
  getFoodInfo(req, res, function(req, res, responseData) {
    renderDetailPage(req, res, responseData);
  });
};


/* Put 'Food' Edit this */
module.exports.updateFoodInfo = function(req, res){
  var requestOptions, path, postdata;
  var item_id = req.params.item_id;
  console.log(item_id);
  path = '/api/food/'+item_id;
  postdata = {
    name: req.body.name,
    date: new Date(req.body.date),
    exp_date: new Date(req.body.exp_date),
	left_overs: Boolean(req.body.left_overs),
	quantity: parseInt(req.body.quantity,10)
  };
	console.log(postdata);
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 200 ) {
          res.redirect('/');
		  console.log("PUT Success")
        } else if (response.statusCode === 400 && body.name && body.date && body.exp_date && body.left_overs && body.quantity === "ValidationError" ) {
          console.log("400 and ValidationError");
        } else {
          console.log(body);
          _showError(req, res, response.statusCode);
        }
      }
    );
  };


var renderAddForm = function (req, res, locDetail) {
  res.render('add-food', {
    title: 'Add ' + fooDetail.name + ' in MyFridge',
    pageHeader: { title: 'Add MyFood ' + fooDetail.name },
    error: req.query.err
  });
};

/* GET 'Add Food' page */
module.exports.foodAdd = function(req, res) {
    res.render('add-food', {
        title: 'Add new food item.',
        pageHeader: {
            title: 'Add food'
        }
    });
};

/* POST 'Add food' page */
module.exports.foodAddDo = function(req, res){
  var requestOptions, path, foodid, postdata;
  foodid = req.params.foodid;
  path = "/api/addFood";
  postdata = {
    name: req.body.name,
    date: req.body.date,
    expiry: req.body.expiry,
    left_over: req.body.left_over,
    quantity: req.body.quantity 
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  if (!postdata.name || !postdata.date || !postdata.expiry || !postdata.left_over || !postdata.quantity) {
    res.redirect('/');
  } else {
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 201) {
          res.redirect('/');
        } else if (response.statusCode === 400 && body.name && body.name === "ValidationError" ) {
          res.redirect('/');
        } else {
          console.log(body);
          _showError(req, res, response.statusCode);
        }
      }
    );
  }
};




