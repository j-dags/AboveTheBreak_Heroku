const Sequelize = require('sequelize')
const db = require('../db')

const Statistic = db.define('statistic', {
	seasonId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	// playerId: {
	// 	type: Sequelize.INTEGER,
	// 	allowNull: false,
	// },

	PLAYER_NAME: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	TEAM_ID: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	TEAM_ABBREVIATION: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	AGE: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	GP: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	W: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	L: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	W_PCT: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	MIN: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FGM: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FGA: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FG_PCT: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FG3M: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FG3A: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FG3_PCT: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FTM: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FTA: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	FT_PCT: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	OREB: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	DREB: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	REB: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	AST: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	TOV: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	STL: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	BLK: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	BLKA: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	PF: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	PFD: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	PTS: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	PLUS_MINUS: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	NBA_FANTASY_PTS: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	DD2: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	TD3: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},

	GP_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	W_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	L_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	W_PCT_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	MIN_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FGM_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FGA_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FG_PCT_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FG3M_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FG3A_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FG3_PCT_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FTM_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FTA_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	FT_PCT_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	OREB_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	DREB_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	REB_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	AST_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	TOV_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	STL_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	BLK_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	BLKA_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	PF_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	PFD_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	PTS_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	PLUS_MINUS_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	NBA_FANTASY_PTS_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	DD2_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	TD3_RANK: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	CFID: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},

	CFPARAMS: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})

module.exports = Statistic
