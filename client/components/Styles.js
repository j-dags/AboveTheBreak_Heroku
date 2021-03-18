import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
position: relative;
cursor: pointer;
will-change: height;
display: grid;
grid-template-columns: repeat(auto-fit, 325px);
grid-gap: 3em;
padding: 0em 2em;
place-content: center
}
`

const Item = styled(animated.div)`
	border-radius: 5px;
	will-change: transform, opacity;
`

export { Container, Item }
