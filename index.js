const express = require('express');
const queryable = require('queryable');
const fs = require('fs');

//DB SETUP
var db = queryable.open("db/mydata.db");

//SERVER SETUP
var app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

app.get('/api', (request, response) => {
    response.json(db.find());
});

app.post('/api', (request, response) => {
    const data = request.body;
    db.insert(data);
    db.save();
});

//DEVELOPMENT

/*
--- db format example ---

{
    "name":"Edelweißpiraten",
    "artist":"Captain Borderline",
    "viertel":"Ehrenfeld",
    "lat":50.9516951,
    "lon":6.9129999,
    "img":"img/1.jpg"
}
*/

/*
--- initial db entry ---

var imgPath = "img/1.jpg";
var imgData = fs.readFileSync(imgPath,'base64');
db.insert({
    "name":"Edelweißpiraten",
    "artist":"Captain Borderline",
    "viertel":"Ehrenfeld",
    "lat":50.9516951,
    "lon":6.9129999,
    "img":imgData
});
db.save();
*/