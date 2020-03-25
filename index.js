var express     = require('express');
var queryable   = require('queryable');

var app         = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

//SETUP
var db = queryable.open( "db/mydata.db" );