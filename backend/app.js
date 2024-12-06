const express = require('express');
const app= express();


app.use('/', (req,res) => {
res.status(200).json({ data: '  JWTAUTH Server --server updated hayat jahangir khan'});
});

module.exports =app;