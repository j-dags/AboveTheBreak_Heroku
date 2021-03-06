const router = require('express').Router()

// Mounted on /api

router.use('/stats', require('./stats'))

router.use((req, res, next) => {
	const err = new Error('Not Found.')
	err.status = 404
	next(err)
})

module.exports = router
