const { renderFile } = require("ejs");
const express = require("express");
const path= require("path");
const app = express();

app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//middleware

// routes
app.use(require('./routes/index'));

// static files 
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
   console.log("escuchando puerto 3000");
});