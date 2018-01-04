import styled from 'styled-components'

export const WorkspaceDiv = styled.div`
	flex: 5;
	display: flex;
	flex-flow: row wrap;
	background-color: white;
	padding: 10px;
	overflow-y:auto;
	-webkit-overflow-scrolling: touch;
	border-radius: ${props => props.noTab ? '5px' : '0px 5px 5px 5px'};
`