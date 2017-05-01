const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');

router.use(function(res,req,next){
	console.log('in index.js');
	next();
})
router.use('/wiki', wikiRouter);

module.exports = {
	wikiRouter: wikiRouter,
	userRouter: userRouter,
	router: router
};