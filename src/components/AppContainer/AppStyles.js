import styled from 'styled-components'

const defaultArea = '"header header" "menupanel workspace" "footer footer"'

export const AppDiv = styled.div`
	display: grid;
	grid-template-areas: ${({ theme }) => theme.app ?  theme.app.gridArea ? theme.app.gridArea : defaultArea : defaultArea};
	grid-template-columns: ${({ theme }) => theme.app ?  theme.app.gridTemplateColumns ? theme.app.gridTemplateColumns : "max-content 1fr" : "max-content 1fr" };
	grid-template-rows: ${({ theme }) => theme.app ?  theme.app.gridTemplateRows ? theme.app.gridTemplateRows : 'auto 1fr auto' : 'auto 1fr auto'};
	height: 100vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.workspace.background};	
`

