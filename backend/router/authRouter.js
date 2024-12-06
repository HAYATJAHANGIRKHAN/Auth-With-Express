const express =require('express');
const authRouter = express.Router();

authRouter.post('/signup', signup);

module.exports= authRouter;