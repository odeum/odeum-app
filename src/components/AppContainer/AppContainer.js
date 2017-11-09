import styled from 'styled-components'
import theme from 'theme/default'

const AppContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	height: 100vh;
	width: 100vw;
	background-color: ${theme.workspace.background};	
`

export default AppContainer
