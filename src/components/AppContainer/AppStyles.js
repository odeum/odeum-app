import styled from 'styled-components'

export const AppDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	height: 100vh;
	width: 100vw;
	background-color: ${props => props.theme.workspace.background};	
`