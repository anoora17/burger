var connection = require('./connection.js');
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}
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
     create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

    }

module.exports = orm;
