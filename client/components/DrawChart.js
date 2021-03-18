// import React, { useEffect } from 'react';
// import * as d3 from 'd3';

// const DrawChart = ({ data, stat, loaded }) => {
// 	let pts = [];
// 	let height = 300;
// 	let width = 600;
// 	if (loaded) {
// 		pts = data.map((player) => parseFloat(player.pts)).sort((a, b) => a - b);
// 	}
// 	// useEffect(() => {
// 	// 	const drawChart = () => {
// 	// 		const svg = d3
// 	// 			.select(`body`)
// 	// 			.append('svg')
// 	// 			.attr('width', width)
// 	// 			.attr('height', height);

// 	// 		svg
// 	// 			.selectAll('rect')
// 	// 			.data(pts)
// 	// 			.enter()
// 	// 			.append('rect')
// 	// 			.attr('x', (d, i) => i * 3)
// 	// 			.attr('y', (d, i) => 300 - 5 * d)
// 	// 			.attr('width', 1)
// 	// 			.attr('height', (d, i) => d * 5)
// 	// 			.attr('fill', 'green');
// 	// 	};
// 	// 	drawChart();
// 	// }, []);

// 	return <div id={`#`}>asdfasdf</div>;
// };

// export default DrawChart;

// class StatChart extends Component {
// 	componentDidMount() {
// 		this.drawChart();
// 	}

// 	drawChart() {
// 		const data = this.props.data;

// 		const svg = d3
// 			.select('body')
// 			.append('svg')
// 			.attr('width', this.props.width)
// 			.attr('height', this.props.height);

// 		svg
// 			.selectAll('rect')
// 			.data(data)
// 			.enter()
// 			.append('rect')
// 			.attr('x', (d, i) => i * 70)
// 			.attr('y', (d, i) => 300 - 10 * d)
// 			.attr('width', 65)
// 			.attr('height', (d, i) => d * 10)
// 			.attr('fill', 'green');
// 	}

// 	render() {
// 		return <div id={'#' + this.props.id}></div>;
// 	}
// }

// export default StatChart;
