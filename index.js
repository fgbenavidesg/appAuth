const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
const  path  = require('path');
require('dotenv').config();

//crear servidor de express
const app= express();
//dbConnection
dbConnection();
//directorio publico
app.use(express.static("public"));
//cors
app.use(cors());
//leer y parseo de informacion del body
app.use(express.json());
//rutas
app.use('/api/auth',require('./routes/auth'));

app.get('*', (req , res )=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto  ${process.env.PORT} `)
});


