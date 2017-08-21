var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')

router.get('/', function(req, res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })

});
router.put('/burgers/update', function(req, res){
   var id = req.body.burger_id
   burger.update(id, function(result){
       console.log(result);
       res.redirect('/')
   });
});

router.post('/burger/create',function(req, res){
      var name= req.body.burger_name;
      console.log(name);
  burger.create(name , function(result) {
    res.redirect('/');

});
  });

module.exports = router;
