var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
         cb(res);
     })
},
    update: function(id,cb){
        orm.update('burgers', id, function(res){
          cb(res)
        });

    },
    create: function(data,cb){
      orm.create('burgers', 'burger_name',data, function(res){
        console.log(res)
        cb(res)
      });
    }
}

module.exports = burger;
