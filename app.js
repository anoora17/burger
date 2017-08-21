var express = require('express');
var bodyparser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3031;

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({ extended: false}));

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routers = require('./controllers/routes.js');
app.use('/', routers);

app.listen(PORT, function(){
    console.log(" App listening to the PORT "+ PORT)
});
