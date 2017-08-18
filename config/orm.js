var connection = require('./connection.js');

var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM "
        connection.query(queryString + table + ";", function (err, result){
            if (err){
                throw err;
            }
            console.log(result);
        cb(result);
        })

    },

     update:function(table, condition, cb){
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id:condition}], function(err, result){
             if(err) {throw err};
             console.log(result);
             cb(result)
         });

     }

    }

module.exports = orm;
