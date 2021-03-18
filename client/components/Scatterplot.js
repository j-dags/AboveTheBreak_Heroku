/* ScatterPlot-with-trendline.jsx
Requires: react and d3 (ie  `npm install -S react d3`)
See the LinearGraph for an example of calling ScatterPlot

Credit @isaaguilar.
*/

import React from 'react'
import { scaleLinear, max, axisLeft, axisBottom, select } from 'd3'
import './Scatterplot.css'

const sortNumber = (a, b) => {
	return a - b
}

const ScatterPlot = ({ data, stat, name }) => {
	let playerDot = []
	data = data.map((player) => {
		let color = '#E8EFF6'
		if (player.PLAYER_NAME === name)
			playerDot = [player.GP, player[stat], '#e63946']
		return [player.GP, player[stat], color]
	})

	data.push(playerDot)

	const margin = { top: 20, right: 15, bottom: 60, left: 60 }
	const width = 300 - margin.left - margin.right
	const height = 200 - margin.top - margin.bottom

	const x = scaleLinear()
		.domain([
			0,
			max(data, function (d) {
				return d[0]
			}),
		])
		.range([0, width])

	const y = scaleLinear()
		.domain([
			0,
			max(data, function (d) {
				return d[1]
			}),
		])
		.range([height, 0])
	return (
		<div className="chart-container">
			<div className="scatterChart">
				<div className="chart-title"> {stat.toUpperCase()} DISTRIBUTION</div>

				<div className="yAxis">
					<div>{stat} / Game</div>
				</div>
				<svg
					width={width + margin.right + margin.left}
					height={height + margin.top + margin.bottom}
					className="chart"
				>
					<g
						transform={'translate(' + margin.left + ',' + margin.top + ')'}
						width={width}
						height={height}
						className="main"
					>
						<RenderCircles data={data} scale={{ x, y }} />
						<TrendLine data={data} scale={{ x, y }} />
						<Axis
							axis="x"
							transform={'translate(0,' + height + ')'}
							scale={axisBottom().scale(x)}
						/>
						<Axis
							axis="y"
							transform="translate(0,0)"
							scale={axisLeft().scale(y)}
						/>
					</g>
				</svg>
				<div className="xAxis">Games Played</div>
			</div>
		</div>
	)
}

const RenderCircles = (props) => {
	let renderCircles = props.data.map((coords, i) => {
		return (
			<circle
				cx={props.scale.x(coords[0])}
				cy={props.scale.y(coords[1])}
				r="4"
				style={{ fill: coords[2], opacity: 0.9 }}
				key={i}
			/>
		)
	})

	return <g>{renderCircles}</g>
}

const TrendLine = (props) => {
	let x_coords = props.data.map((n) => {
		return n[0]
	})
	let y_coords = props.data.map((n) => {
		return n[1]
	})
	const trendline = linearRegression(y_coords, x_coords)

	// Lowest and highest x coordinates to draw a plot line
	const lowest_x = x_coords.sort(sortNumber)[0]
	const hightest_x = x_coords.sort(sortNumber)[x_coords.length - 1]
	const trendline_points = [
		[lowest_x, trendline(lowest_x)],
		[hightest_x, trendline(hightest_x)],
	]

	return (
		<line
			x1={props.scale.x(trendline_points[0][0])}
			y1={props.scale.y(trendline_points[0][1])}
			x2={props.scale.x(trendline_points[1][0])}
			y2={props.scale.y(trendline_points[1][1])}
			style={{ stroke: 'black', strokeWidth: '2' }}
		/>
	)
}

class Axis extends React.Component {
	componentDidMount() {
		const node = this.refs[this.props.axis]
		// const myRef = React.createRef(this.props.axis)
		// console.log('this.refs > ', this.refs)
		// console.log('myRef > ', myRef)
		select(node).call(this.props.scale)
	}

	render() {
		return (
			<g
				className="main axis date"
				transform={this.props.transform}
				ref={this.props.axis}
			/>
		)
	}
}

const linearRegression = (y, x) => {
	var lr = {}
	var n = y.length
	var sum_x = 0
	var sum_y = 0
	var sum_xy = 0
	var sum_xx = 0
	var sum_yy = 0

	for (var i = 0; i < y.length; i++) {
		sum_x += x[i]
		sum_y += y[i]
		sum_xy += x[i] * y[i]
		sum_xx += x[i] * x[i]
		sum_yy += y[i] * y[i]
	}

	lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x)
	lr['intercept'] = (sum_y - lr.slope * sum_x) / n
	lr['r2'] = Math.pow(
		(n * sum_xy - sum_x * sum_y) /
			Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
		2
	)

	return (x) => {
		return lr.slope * x + lr.intercept
	}
}

export default ScatterPlot
