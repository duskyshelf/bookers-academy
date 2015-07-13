var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/html/index.html'));
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

});

var knex = require('knex')({
  client: 'pg',
  connection: "postgres://localhost/bookers"
});

// knex.schema.createTable('users', function(table) {
//   table.increments('id');
//   table.string('user_name');
// })

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});

var bob = new User({id: 2});
bob.save()

knex.select("*").from("users").then(function(rows){
    console.log(rows);});

// app.listen(3000);