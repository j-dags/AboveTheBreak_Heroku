const { Player, Season, Statistic } = require('../server/db/models')
const db = require('../server/db/db')
let data15 = require('./dataset_2015-16')
let data16 = require('./dataset_2016-17')
let data17 = require('./dataset_2017-18')
let data18 = require('./dataset_2018-19')
let data19 = require('./dataset_2019-20')
let data20 = require('./dataset_2020-21')
data15 = data15.map((stat) => ({ ...stat, seasonId: 1 }))
data16 = data16.map((stat) => ({ ...stat, seasonId: 2 }))
data17 = data17.map((stat) => ({ ...stat, seasonId: 3 }))
data18 = data18.map((stat) => ({ ...stat, seasonId: 4 }))
data19 = data19.map((stat) => ({ ...stat, seasonId: 5 }))
data20 = data20.map((stat) => ({ ...stat, seasonId: 6 }))

const seed = async () => {
	try {
		await db.sync({ force: true })
		// await db.sync()
		await Season.create({ year: '2015-16' })
		await Season.create({ year: '2016-17' })
		await Season.create({ year: '2017-18' })
		await Season.create({ year: '2018-19' })
		await Season.create({ year: '2019-20' })
		await Season.create({ year: '2020-21' })

		await Statistic.bulkCreate(data15)
		await Statistic.bulkCreate(data16)
		await Statistic.bulkCreate(data17)
		await Statistic.bulkCreate(data18)
		await Statistic.bulkCreate(data19)
		await Statistic.bulkCreate(data20)
	} catch (err) {
		console.log(err)
	}
}

module.exports = seed

if (require.main === module) {
	seed()
		.then(() => {
			console.log('Seeding success!')
			db.close()
		})
		.catch((err) => {
			console.error('Oh noes! Something went wrong!')
			console.error(err)
			db.close()
		})
}
