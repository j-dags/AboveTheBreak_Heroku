import React, { useEffect, useState } from 'react'
import firebaseApp from '../firebase'
import Histogram from './Histogram'
import './LeagueCharts.css'

const db = firebaseApp.firestore()

const LeagueCharts = () => {
	const [datas, setData] = useState({})
	const [year, setYear] = useState('2020-21')

	useEffect(() => {
		// USE FOR PLAYERSTATS (PREFERRED TABLE) SCRAPED AND STORED IN OUTPUT.JS
		const getPlayerData = async () => {
			// Get and parse data from firestore
			const snapshot = await db.collection(year).get()
			let arr = []
			snapshot.forEach((el) => arr.push(el.data()))
			// Filter and sort player data
			if (arr.length > 1) {
				arr = arr
					.filter((player) => player.NBA_FANTASY_PTS_RANK <= 150)
					.sort((a, b) => a.NBA_FANTASY_PTS_RANK - b.NBA_FANTASY_PTS_RANK)
			}
			// Save to state
			setData(arr)
		}
		getPlayerData()
	}, [year])

	console.log('datas > ', datas)
	return (
		<div id="histogram-body">
			<div className="histogram-header">
				<h1>Categorical Distributions.</h1>
				<select
					name="Decimal"
					className="ui fluid dropdown"
					onChange={(e) => setYear(e.target.value)}
					type="number"
					value={year}
				>
					<option key={0} value={'2020-21'}>
						2020-21
					</option>
					<option key={1} value={'2019-20'}>
						2019-20
					</option>
					<option key={2} value={'2018-19'}>
						2018-19
					</option>
					<option key={3} value={'2017-18'}>
						2017-18
					</option>
					<option key={4} value={'2016-17'}>
						2016-17
					</option>
					<option key={5} value={'2015-16'}>
						2015-16
					</option>
				</select>
			</div>
			<div id="histogram-container">
				<Histogram data={datas} stat={'FG3M'} />
				<Histogram data={datas} stat={'PTS'} />
				<Histogram data={datas} stat={'REB'} />
				<Histogram data={datas} stat={'AST'} />
				<Histogram data={datas} stat={'STL'} />
				<Histogram data={datas} stat={'BLK'} />
				<Histogram data={datas} stat={'FG_PCT'} />
				<Histogram data={datas} stat={'FT_PCT'} />
				<Histogram data={datas} stat={'TOV'} />
			</div>
		</div>
	)

	// </div>
}

export default LeagueCharts
