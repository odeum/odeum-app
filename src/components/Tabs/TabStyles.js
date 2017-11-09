import styled from 'styled-components'
import theme from 'theme/default'
import { Link as RouterLink } from 'react-router-dom'

export const TabList = styled.div`
	flex: 1;
 	display: flex;
 	flex-flow: row;
 	list-style: none;
 	padding: 0;
 	margin: 0;
	max-height: 40px;
	align-items: end;
`

export const TabText = styled.div`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`

export const Link = styled(RouterLink)`
	text-decoration: none;
	align-items: center;
	justify-content: center;
	display: flex;
	height: 40px;
	margin-right: 3px;
	max-width: 250px;
	min-width: 60px;
	padding-left: 20px;
	padding-right: 20px;
	flex-flow: row nowrap;
	border-radius: 5px 5px 0px 0px;
	color: ${props => props.selected ? '#fff' : '#000'};
	background: ${props => props.selected ? theme.tab.selected : theme.tab.unselected};
	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
	&:hover{
		background: ${theme.tab.hover};
		color: white;
	}
`

export const SceneDiv = styled.div`
	display: flex;
	flex: 5;
	flex-flow: column nowrap;
	margin: 20px 20px 20px 20px;
`

export const TabIconDiv = styled.div`
	width: 18px; 
	height: 18px;
	margin-right: 8px;  
	display: flex;
	align-items: center;
	justify-content: center;
`