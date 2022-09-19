//Contienen expres y las peticiones
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    return res.json({})
});

module.exports = app;