const express = require('express');
const jwt = require('jsonwebtoken');
const { register, login, getAlluser } = require('../controllers/user.controllers');
const userRouter = express.Router();

userRouter.get('/user/loginUser', (req, res) => {
	const authorization = req.headers.authorization;

	if (authorization) {
		let token = authorization.split(' ').pop();
		try {
			if (token) {
				jwt.verify(token, process.env.JWT_SECRET);

				const user = jwt.decode(token);
				return res.send(user);
			} else {
				return res.status(400).send('invalid token provided');
			}
		} catch (error) {
			return res.status(400).send(error)
		}
	} else {
		return res.status(400).send('no token provided');
	}
});

userRouter.post('/user/login', async (req, res) => {
	const body = req.body;
	try {
		const token = await login(body);
		return res.send({ data: token });
	} catch (error) {
		return res.status(404).send(error.message);
	}
});

userRouter.post('/user/register', async (req, res) => {
	const body = req.body;
	try {
		const user = await register(body);
		return res.send(user);
	} catch (error) {
		return res.status(404).send(error.message);
	}
});

userRouter.get('/users',async (req,res)=>{
	try {
		// const users = await getAlluser();
		return res.send("users");
	} catch (error) {
		return res.status(400).send(error);
	}
})

userRouter.get('/',(req,res)=>{
	return res.send('hello')
});

userRouter.post('/user/github-signin', (req, res) => {});

module.exports = { userRouter };
