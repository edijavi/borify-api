'use strict'
//  local connection to db
// 'mongodb://localhost:27017/borify'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://borify:boream@borify-l3syr.mongodb.net/borify-db?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err, res) => {
  if (err){
    throw err;
  }else{
    console.log("La base de datos está corriendo correctamente");

    app.listen(port, function (){
      console.log("Servidor del API rest de música escuchando en http://localhost:"+port);
    });    
  }
});