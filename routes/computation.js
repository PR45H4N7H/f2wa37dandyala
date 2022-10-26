var express = require('express');
var router = express.Router();
var random = Math.floor(Math.random()*90)
var random1= Math.random()
var res1="Math.acosh() applied to "+ random + " is "+ Math.acosh(random,random)
var res2="Math.log1p()  applied to "+ random1 + " is "+ Math.log1p(random1)
var res3= "Math.tan() applied to "+ random + " is "+ Math.tan(random);
var res4= "Math.sqrt() applied to "+ random + " is "+ Math.sqrt(random);
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Prashanth Reddy Dandyala Bonus',result1: res1, result2:res2, result3:res3, result4:res4 });
});



module.exports = router;
