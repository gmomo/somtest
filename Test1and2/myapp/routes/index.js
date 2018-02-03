var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello World' });
});

router.post('/hello',function(req,res,next){
	res.send("You entered an integer : " + req.body.integer)
});

module.exports = router;
