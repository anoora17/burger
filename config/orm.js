var connection = require('./connection.js');

var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ";
        connection.query(queryString+ table+ ";", function (err, result){
            if (err){
                throw err;
            }
            console.log(result);
        cb(result);
        })

    },

     insertOne:function(table,condition,cb){
        connection.query=("UPDATE" + table + "SET devoured = true WHERE id= "+condition +";", function(err,result){
             if(err) {throw err};
             console.log(result);
             cb(result)
         });

     }

    }

module.exports = orm;
