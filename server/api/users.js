const router = require('express').Router()
const User = require('../db/models/user')

// Mounted on /api/users

// GET /api/users
router.get('/', (req, res, next) => {
	try {
		const users = User.findAll()
		res.json(users)
	} catch (error) {
		next(error)
	}
	// res.json("You've reached Users!")
})

// POST /api/users
router.post('/', async (req, res, next) => {
	// const { name, email, password } = req.query;
	const { name, email, password } = req.body
	try {
		const user = await User.create({ name, email, password })
		res.json(user)
	} catch (err) {
		next(err)
	}
})

module.exports = router
