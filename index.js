const express     = require('express');
const queryable   = require('queryable');

//DB SETUP
var db = queryable.open( "db/mydata.db" );

//SERVER SETUP
var app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

app.get('/api', (request, response) => {
    response.json(db.find());
});

/*app.post('/api', (request, response) => {
    const data = request.body;
    response.json(data);
});*/

