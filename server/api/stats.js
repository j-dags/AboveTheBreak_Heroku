const router = require('express').Router()
// const { Player, Season, Statistic } = require('../index')
const Season = require('../db/models/season')
router.get('/:year', async (req, res, next) => {
	try {
		console.log('season > ', Season)
		const season = await Season.findOne({ where: { year: req.params.year } })
		let stats = await season.getStatistics()
		stats = stats.filter((player) => player.NBA_FANTASY_PTS_RANK < 150)
		stats = stats.sort(
			(a, b) => a.NBA_FANTASY_PTS_RANK - b.NBA_FANTASY_PTS_RANK
		)
		res.json(stats)
	} catch (error) {
		next(error)
	}
})

router.use(function (req, res, next) {
	const err = new Error('Not found.')
	err.status = 404
	next(err)
})

module.exports = router
