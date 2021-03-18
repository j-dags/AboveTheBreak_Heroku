const db = require('./db')
// const Brand = require('./brand')
// const Product = require('./product')
// const User = require('./models/user')
const Player = require('./models/player')
const Statistic = require('./models/statistic')
const Season = require('./models/season')

// Brand.hasMany(Product)
// Product.belongsTo(Brand)
Season.hasMany(Statistic)
Player.hasMany(Statistic)
Statistic.belongsTo(Season)
Statistic.belongsTo(Player)

module.exports = {
	db,
	// User,
	// Brand,
	// Product,
	Player,
	Season,
	Statistic,
}
