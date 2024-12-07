const express =require('express');
const {signup, signin, getUser} = require('../confiq/databaseconfiq');
const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/user', getUser);

module.exports= authRouter;