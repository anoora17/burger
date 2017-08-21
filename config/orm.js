var connection = require('./connection.js');

var orm = {

    selectAll: function(table, cb) {

        connection.query("SELECT * FROM " + table + ";", function (err, result){ if (err){throw err};
            console.log(result);
        cb(result);
      });

    },

     update:function(table, condition, cb){
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id:condition}], function(err, result){
             if(err) {throw err};
             console.log(result);
             cb(result);
         });

     },
     create:function(data, cb ) {
       var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES (??)";
       connection.query(mySQLQuery,[{burger_name:data}], function (err, result) {
      if (err) throw err;
      console.log(result)
      cb(result);
    });

     }

    }

module.exports = orm;
