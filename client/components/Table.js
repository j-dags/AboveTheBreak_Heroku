/* eslint-disable */
import './Table.css'
import React, { useEffect, useState } from 'react'
import PlayerCharts from './PlayerCharts'
import { headerData } from './rowData'
import { rgb } from 'd3'
import axios from 'axios'
// import firebaseApp from '../firebase'
// const db = firebaseApp.firestore()

const Table = () => {
	const [state, setState] = useState({
		charts: null,
		filter: 'NBA_FANTASY_PTS_RANK',
		loaded: false,
		order: [],
		reverse: false,
		showCharts: false,
		year: '2020-21',
	})

	let i = 0
	let color = '#f6f6f6'

	useEffect(() => {
		const getPlayerData = async () => {
			let { data } = await axios.get(`/api/stats/${state.year}`)
			// setOrder(data)
			// setState({ ...state, loaded: true })
			setState({ ...state, order: data, loaded: true })
			// setLoaded(true)
		}

		getPlayerData()
	}, [state.year])

	const handleClick = (evt) => {
		// if (!charts) setCharts(evt.target.dataset.value)
		// setShowCharts(!showCharts)
		if (!state.charts)
			setState({
				...state,
				charts: evt.target.dataset.value,
				showCharts: !state.showCharts,
			})
		else setState({ ...state, showCharts: !state.showCharts })
	}

	const setChart = (value = !state.charts) => {
		setState({ ...state, charts: value })
	}

	const toggleShowChart = (value = !state.showCharts) => {
		setState({ ...state, showCharts: value })
	}

	// Set new player order sorted depending on column clicked
	const handleFilter = (evt) => {
		const newFilter = evt.target.getAttribute('name')
		let newReverse = false
		if (newFilter === state.filter) {
			newReverse = !state.reverse
		}

		setState({
			...state,
			order: filterFnc(newFilter, newReverse),
			filter: newFilter,
			reverse: newReverse,
		})
		// setOrder(filterFnc(newFilter, newReverse))
		// setFilter(newFilter)
		// setReverse(newReverse)
	}

	// Return order array sorted depending on column clicked
	const filterFnc = (filter, reverse) => {
		// Sort strings
		if (filter === 'PLAYER_NAME' || filter === 'TEAM_ABBREVIATION') {
			return [...state.order].sort(
				(a, b) => a[filter].localeCompare(b[filter]) * (reverse ? -1 : 1)
			)
		}
		// Sort numbers
		else if (!!/RANK/.test(filter) && filter !== 'TOV_RANK') {
			return [...state.order].sort(
				(a, b) => (reverse ? 1 : -1) * (b[filter] - a[filter])
			)
		} else {
			return [...state.order].sort(
				(a, b) => (reverse ? -1 : 1) * (b[filter] - a[filter])
			)
		}
	}

	const setBgColor = (val) => {
		if (val < 75) {
			return { background: rgb(0, 255, 0, Math.max(0.1, 0.6 - val / 75)) }
		} else {
			return { background: rgb(255, 0, 0, Math.min(0.25, (val - 75) / 500)) }
		}
	}

	return (
		state.loaded && (
			// <div>HOL UP</div>
			<div id="table-body">
				<div className="h1-container">
					<h1>Player Rankings.</h1>
					<select
						name="Decimal"
						className="ui fluid dropdown"
						onChange={(e) => setState({ ...state, year: e.target.value })}
						type="number"
						value={state.year}
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
				<table>
					<tbody>
						<tr className="table-header" onClick={handleFilter}>
							{headerData.map((stat) => (
								<th
									key={stat.text}
									className={
										state.filter === stat.name
											? stat.className + '-active'
											: stat.className
									}
									name={stat.name}
								>
									{stat.text}
								</th>
							))}
						</tr>
						{state.order.map((player) => {
							i++
							return (
								<React.Fragment key={i}>
									<tr onClick={handleClick} className="table-row">
										<td
											className="row-rank"
											bgcolor={
												state.filter === 'NBA_FANTASY_PTS_RANK' ? color : null
											}
										>
											{player.NBA_FANTASY_PTS_RANK}
										</td>
										<td
											bgcolor={state.filter === 'PLAYER_NAME' ? color : null}
											className="row-name"
											data-value={player.PLAYER_NAME}
										>
											{player.PLAYER_NAME}
										</td>
										<td
											bgcolor={
												state.filter === 'TEAM_ABBREVIATION' ? color : null
											}
											className="row-team"
										>
											{player.TEAM_ABBREVIATION}
										</td>
										<td
											bgcolor={state.filter === 'GP' ? color : null}
											className="row-team"
										>
											{player.GP}
										</td>
										<td
											bgcolor={state.filter === 'FG3M' ? color : null}
											className="row-stat"
										>
											{player.FG3M.toFixed(1)}
										</td>
										<td
											bgcolor={state.filter === 'PTS' ? color : null}
											className="row-stat"
										>
											{player.PTS.toFixed(1)}
										</td>
										<td
											bgcolor={state.filter === 'REB' ? color : null}
											className="row-stat"
										>
											{player.REB.toFixed(1)}
										</td>
										<td
											bgcolor={state.filter === 'AST' ? color : null}
											className="row-stat"
										>
											{player.AST.toFixed(1)}
										</td>
										<td
											bgcolor={state.filter === 'STL' ? color : null}
											className="row-stat"
										>
											{player.STL.toFixed(1)}
										</td>
										<td
											bgcolor={state.filter === 'BLK' ? color : null}
											className="row-stat"
										>
											{player.BLK.toFixed(1)}
										</td>
										<td
											bgcolor={state.filter === 'FG_PCT' ? color : null}
											className="row-stat"
										>
											{player.FG_PCT.toFixed(2)}
										</td>
										<td
											bgcolor={state.filter === 'FT_PCT' ? color : null}
											className="row-stat"
										>
											{player.FT_PCT.toFixed(2)}
										</td>
										<td
											bgcolor={state.filter === 'TOV' ? color : null}
											className="row-stat"
										>
											{player.TOV.toFixed()}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.FG3M_RANK)}
										>
											{player.FG3M_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.PTS_RANK)}
										>
											{player.PTS_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.REB_RANK)}
										>
											{player.REB_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.AST_RANK)}
										>
											{player.AST_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.STL_RANK)}
										>
											{player.STL_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.BLK_RANK)}
										>
											{player.BLK_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.FG_PCT_RANK)}
										>
											{player.FG_PCT_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(player.FT_PCT_RANK)}
										>
											{player.FT_PCT_RANK}
										</td>
										<td
											className="row-stat"
											style={setBgColor(250 - player.TOV_RANK)}
										>
											{player.TOV_RANK}
										</td>
									</tr>
									{state.charts === player.PLAYER_NAME && (
										<tr key={player.PTS} className="player-charts-row">
											<td colSpan="22">
												<PlayerCharts
													data={state.order}
													player={player}
													// setCharts={setCharts}
													// setClose={setClose}
													// setShowCharts={setShowCharts}
													showCharts={state.showCharts}
													setChart={setChart}
													toggleShowChart={toggleShowChart}
													// state={state}
													// setState={setState}
												/>
											</td>
										</tr>
									)}
								</React.Fragment>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	)
}

export default Table
