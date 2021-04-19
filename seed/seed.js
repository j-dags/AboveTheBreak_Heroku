'use strict'

const db = require('../server/db/db.js')
const { Season, Statistic } = require('../server/db/models')
// const seasons = require('./seedData')

let data15 = require('./dataset_2015-16')
let data16 = require('./dataset_2016-17')
let data17 = require('./dataset_2017-18')
let data18 = require('./dataset_2018-19')
let data19 = require('./dataset_2019-20')
let data20 = require('./dataset_2020-21')

data15 = data15.filter((el) => el.NBA_FANTASY_PTS_RANK < 151)
data16 = data16.filter((el) => el.NBA_FANTASY_PTS_RANK < 151)
data17 = data17.filter((el) => el.NBA_FANTASY_PTS_RANK < 151)
data18 = data18.filter((el) => el.NBA_FANTASY_PTS_RANK < 151)
data19 = data19.filter((el) => el.NBA_FANTASY_PTS_RANK < 151)
data20 = data20.filter((el) => el.NBA_FANTASY_PTS_RANK < 151)

const seasons = [
	{ year: '2015-16' },
	{ year: '2016-17' },
	{ year: '2017-18' },
	{ year: '2018-19' },
	{ year: '2019-20' },
	{ year: '2020-21' },
]

async function seed() {
	await db.sync({ force: true })
	// await db.sync()
	console.log('db synced!')

	const createdSeasons = await Season.bulkCreate(seasons)
	console.log(`seeded ${createdSeasons.length} seasons`)

	await Statistic.bulkCreate(data15)
	await Statistic.bulkCreate(data16)
	await Statistic.bulkCreate(data17)
	await Statistic.bulkCreate(data18)
	await Statistic.bulkCreate(data19)
	await Statistic.bulkCreate(data20)

	console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
	console.log('seeding...')
	try {
		await seed()
	} catch (err) {
		console.error(err)
		process.exitCode = 1
	} finally {
		console.log('closing db connection')
		await db.close()
		console.log('db connection closed')
	}
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
	runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
