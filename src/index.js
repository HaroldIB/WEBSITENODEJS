const express = require('express');
const app = express();
const path = require('path');
//Seting
app.set('port',3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
//middlewares


//routers
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//Listening the server
app.listen(app.get('port'), () =>{
    console.log('Servidor en puerto ',app.get('port'));
})