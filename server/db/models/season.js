const Sequelize = require('sequelize')
const db = require('../db')

const Season = db.define('season', {
	year: {
		type: Sequelize.STRING,
		allowNull: false,
		// defaultValue: '2020-21',
	},
})

module.exports = Season
