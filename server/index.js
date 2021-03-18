const express = require('express')
const app = express()
const path = require('path')
const apiRoutes = require('./api')
const volleyball = require('volleyball')
app.use(volleyball)

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', apiRoutes)

// sends index.html
app.use('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'public/index.html'))
	// if (
	//   'https' !== req.headers['x-forwarded-proto'] &&
	//   'production' === process.env.NODE_ENV
	// ) {
	//   res.redirect('https://' + req.hostname + req.url)
	// } else {
	//   // Continue to other routes if we're not redirecting
	//   next()
	// }
})

app.use((req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	next(err)
})

app.use((err, req, res, next) => {
	console.error(err)
	console.error(err.stack)
	res.status(err.status || 500)
})

module.exports = app
