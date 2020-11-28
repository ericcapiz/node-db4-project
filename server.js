const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require("./recipe/recipeRouter.js");


const server = express();

server.use(helmet())
server.use(express.json());
server.get('/', (req,res)=>{
    res.json('node db4 project')
})
server.use('/api/' , RecipeRouter);

module.exports = server;