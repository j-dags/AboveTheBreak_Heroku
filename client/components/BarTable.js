import React, { PureComponent } from 'react';
import { BarChart, Bar } from 'recharts';

export default class BarTable extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/';

	render() {
		let { data, stat } = this.props;

		if (data.length > 0) {
			data = data
				.map((player) => ({
					name: player.playerName,
					val: player[stat],
				}))
				.sort((a, b) => a.val - b.val);
		}

		return !data ? (
			<div>Loading</div>
		) : (
			<div className="chart">
				<h2>{stat} Distribution</h2>
				<BarChart width={500} height={300} data={data}>
					<Bar dataKey="val" fill="#8884d8" />
				</BarChart>
			</div>
		);
	}
}
