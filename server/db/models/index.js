const Player = require('./player')
const Statistic = require('./statistic')
const Season = require('./season')

Season.hasMany(Statistic)
Player.hasMany(Statistic)
Statistic.belongsTo(Season)
Statistic.belongsTo(Player)

module.exports = {
	Player,
	Season,
	Statistic,
}
