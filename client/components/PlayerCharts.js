/* eslint-disable */
import Scatterplot from './Scatterplot'
import React, { useEffect, useState, useRef } from 'react'
import { useTransition, useSpring, useChain } from 'react-spring'
import { Container, Item } from './Styles'

import './PlayerCharts.css'

const PlayerCharts = ({
	data,
	player,
	showCharts,
	setSelectedPlayer,
	toggleShowChart,
}) => {
	const [heights, setHeight] = useState('2400px')
	const stats = [
		'FG3M',
		'PTS',
		'REB',
		'AST',
		'STL',
		'BLK',
		'FG_PCT',
		'FT_PCT',
		'TOV',
	]

	useEffect(() => {
		// Handler to call on window resize

		function handleResize() {
			if (window.innerWidth < 875) setHeight('2400px')
			else if (window.innerWidth > 1225) setHeight('850px')
			else setHeight('1400px')
		}
		window.addEventListener('resize', handleResize)
		handleResize()

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize)
	}, [window])

	const clearActive = () => {
		if (!showCharts) {
			setSelectedPlayer(null)
		}
	}

	const springRef = useRef()
	const props = useSpring({
		ref: springRef,
		config: { mass: 1, tension: 170, friction: 26, velocity: 10 },
		from: { height: '0px' },
		to: {
			height: showCharts ? heights : '0px',
		},
		onRest: () => clearActive(),
	})

	const transRef = useRef()
	const transitions = useTransition(showCharts ? stats : [], (stat) => stat, {
		ref: transRef,
		unique: true,
		trail: 400 / stats.length,
		from: { opacity: 0, transform: 'scale(0)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0)' },
	})

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	useChain(showCharts ? [springRef, transRef] : [transRef, springRef], [
		0,
		showCharts ? 0.25 : 0.6,
		// 0,
		// 1,
	])

	return (
		<Container
			className="script-box"
			style={props}
			// onClick={() => setShowCharts(!showCharts)}
			onClick={() => toggleShowChart()}
		>
			{transitions.map(({ item, key, props }) => (
				<Item key={key} style={{ ...props, background: item.css }}>
					<Scatterplot
						key={key}
						data={data}
						stat={key}
						name={player.PLAYER_NAME}
					/>
				</Item>
			))}
		</Container>
	)
}

export default PlayerCharts
