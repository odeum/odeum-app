import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'
import { rowColCalc, spanCalc, spanRowCalc } from '../utils/Functions'

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

export const Link = styled(RouterLink) `
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
	color: ${props => props.activetab === 'true' ? props.theme.tab.activeColor : props.theme.tab.color};
	background: ${props =>  props.activetab === 'true' ? props.theme.tab.selected : props.theme.tab.unselected };
	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
	&:hover{
		background: ${props => props.theme.tab.hover};
		color: white;
	}
`

export const SceneDiv = styled.div`
	grid-area:workspace;
	display: flex;
	flex-flow: column nowrap;
	margin: 20px 20px 20px 20px;
	overflow-y:auto;
	-webkit-overflow-scrolling: touch;

	/* IE11 Support */
	-ms-grid-column: ${p => rowColCalc(p.theme.app.gridArea, 'workspace', 'column')};
	-ms-grid-row: ${p => rowColCalc(p.theme.app.gridArea, 'workspace', 'row')};
	-ms-grid-column-span: ${p => {var x = spanCalc(p.theme.app.gridArea, 'workspace', 'column'); return x > 1 ? x : 'none'}};
	-ms-grid-row-span: ${p => {var y = spanRowCalc(p.theme.app.gridArea, 'workspace'); return  y > 1 ? y : 'none'}};
`

export const TabIconDiv = styled.div`
	width: 18px; 
	height: 18px;
	margin-right: 8px;  
	display: flex;
	align-items: center;
	justify-content: center;
`