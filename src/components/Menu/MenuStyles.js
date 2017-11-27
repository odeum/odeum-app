import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'

export const MenuDiv = styled.div`
	background-color: ${props => props.theme.menu.background};
	display: flex;
	flex: 1 0 auto;
	flex-flow: column nowrap;
	overflow-x: hidden;
	max-width: ${props => props.achordeon ? '250px;' : '50px'};
	transition: max-width 300ms ease;
`

const BaseItem = styled.div`
	border-bottom: ${props => props.theme.menu.bottomBorder};
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
`

export const MenuHeader = BaseItem.extend`
`

export const IconDiv = styled.div`
	width: 50; 
	height: 100%; 
	min-width: 50px; 
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ArrowIconDiv = IconDiv.extend`
	align-self: right;
`
export const MenuText = styled.div`
	width: 100%;
`
export const MenuContainer = styled.div`
	display:flex;
	flex-flow: ${props => props.quicknav ? 'column nowrap'  : 'row nowrap' };
	flex:1;
	overflow-y: hidden;
`
export const Link = styled(RouterLink) `
	border-bottom: ${props => props.theme.menu.bottomBorder};
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
		background: ${props => props.theme.menu.hover}
	}
	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
`