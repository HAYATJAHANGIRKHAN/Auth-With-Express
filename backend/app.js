const express = require('express');
const app= express();
const authRouter = require('./router/authRouter');

const databaseconnect = require('./confiq/databaseconfiq');
databaseconnect();
app.use(express.json());


app.use('/api/auth/', authRouter);
app.use('/', (req,res) => {
res.status(200).json({ data: '  JWTAUTH Server --server updated hayat jahangir khan'});
});

module.exports =app;