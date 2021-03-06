var express = require("express");
var image = require("../db/index.js");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.get('/nearby', function(req, res) {
//   nearby
//     .find()
//     .where('id')
//     .gt(0)
//     .lt(7)
//     .lean()
//     .exec(function(err, docs) {
//       res.json(docs);
//     });
// });

app.listen(3006, () => console.log("Example app listening on port 3006!"));
