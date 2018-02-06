import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'
import { rowColCalc, spanCalc, spanRowCalc } from '../utils/Functions'

export const BlueMenuContainer = styled.div`
	-ms-grid-column: ${p => rowColCalc(p.theme.app.gridArea, 'menupanel', 'column')};
	-ms-grid-row: ${p => rowColCalc(p.theme.app.gridArea, 'menupanel', 'row')};
	-ms-grid-column-span: ${p => {var x = spanCalc(p.theme.app.gridArea, 'menupanel', 'column'); return x > 1 ? x : 'none'}};
	-ms-grid-row-span: ${p => {var y = spanRowCalc(p.theme.app.gridArea, 'menupanel'); return y > 1 ? y : 'none'}};

	grid-area:menupanel;
	background-color: ${props => props.theme.menu.background};
	display:flex;
	flex-flow:column wrap;
	max-width: ${props => props.achordeon ? '250px;' : '50px'};
	transition: max-width 300ms ease;
`

const BaseItem = styled.div`
	display: flex;
	align-items: center;
	border-bottom: ${props => props.theme.menu.bottomBorder};
	height: 40px;
	width: 100%;
`

export const DefaultHeader = BaseItem.extend`
	display: flex;
	flex-flow:column;
	height: auto;
	align-items: center;
	justify-content: center;
`

export const MenuHeader = BaseItem.extend`
	display: flex;
	flex-flow:column;
	height: auto;
	align-items: center;
	justify-content: center;
	margin-bottom: auto;
`

export const MenuFooter = BaseItem.extend`
	display: flex;
	flex-flow:column;
	height: auto;
	margin-top:auto;
`

export const IconDiv = styled.div`
	display: flex;
	width: 50; 
	height: 50px;
	min-width: 50px;
	align-items: center;
	justify-content: center;
`

export const ArrowIconDiv = IconDiv.extend`
	display: flex;
	align-self: right;
	justify-content: center;
`

export const MenuText = styled.div`
	font-size: ${p => p.theme.menu.fontSize ? p.theme.menu.fontSize : 'inherit'};
	width: 100%;
`

export const MenuContainer = styled.div`
	display:flex;
	flex-flow: ${props => props.quicknav ? 'column nowrap'  : 'row nowrap' };
	flex:1;
	overflow-y: hidden;
`

export const Link = styled(RouterLink) `
	border-bottom: ${props => props.theme.menu.border};
	border-top: ${props => props.theme.menu.border};
	margin: -1px 0 0 -1px;
	text-decoration: none;
	outline: 0;
	color: ${props => props.theme.menu.color};
	width: 250px;
	height: 50px;
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${(props) => props.activemenu === 'true' ? props.theme.menu.selected : props.theme.menu.unselected};
	&:hover{
		background: ${props => props.theme.menu.hover};
		color: ${p => p.theme.menu.textHover ? p.theme.menu.textHover : 'inherit'};
	}
	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
`