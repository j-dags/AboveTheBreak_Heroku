import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import './Histogram.css'

const defaultBars = {
	FG3M: 4,
	PTS: 1,
	REB: 4,
	AST: 4,
	STL: 4,
	BLK: 4,
	FG_PCT: 100,
	FT_PCT: 100,
	TOV: 4,
}

export default class Histogram extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/'
	constructor() {
		super()
		this.state = { decimals: 4 }
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		this.setState({ decimals: defaultBars[this.props.stat] })
	}

	handleChange(evt) {
		let value = parseInt(evt.target.value)
		this.setState({ decimals: value })
	}

	render() {
		let { data, stat } = this.props
		let dist = {}
		if (data.length > 0) {
			// Parse and sort data for the specified stat
			data = data.map((player) => player[stat])
			data = data
				.map(
					(val) => Math.round(val * this.state.decimals) / this.state.decimals
				)
				.sort((a, b) => a - b)

			// Create a stat:stat-frequency object
			data.forEach((stat) => {
				if (Object.keys(dist).includes(stat.toString())) {
					dist[stat] = dist[stat] + 1
				} else dist[stat] = 1
			})

			// Convert obj to array of objs (for BarChart component)
			dist = Object.keys(dist)
				.map((key) => ({ name: key, val: dist[key] }))
				.sort((a, b) => parseInt(a.name) - parseInt(b.name))
		}

		return !data ? (
			<div>Loading</div>
		) : (
			<div className="histogram">
				<div className="histogram-title">
					<h3>{stat.toUpperCase()} DISTRIBUTION</h3>
					<div className="field">
						<label>Bars/Integer </label>
						<select
							name="Decimal"
							className="ui fluid dropdown"
							onChange={this.handleChange}
							type="number"
							value={this.state.decimals}
						>
							<option key={0} value={1}>
								1
							</option>
							<option key={1} value={2}>
								2
							</option>
							<option key={2} value={4}>
								4
							</option>
							<option key={3} value={10}>
								10
							</option>
							<option key={4} value={50}>
								50
							</option>
							<option key={5} value={100}>
								100
							</option>
							<option key={6} value={1000}>
								1000
							</option>
						</select>
					</div>
				</div>

				<BarChart
					width={400}
					height={300}
					data={dist}
					margin={{
						top: 40,
						right: 40,
						left: 0,
						bottom: 30,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="val" fill="#82ca9d" />
				</BarChart>
			</div>
		)
	}
}
