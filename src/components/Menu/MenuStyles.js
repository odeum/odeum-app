import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'

export const MenuDiv = styled.div`
	grid-area:menupanel;
	background-color: ${props => props.theme.menu.background};
	/* display: grid; */
	/* grid-auto-rows: 50px; */
	display:flex;
	flex-flow:column wrap;
	overflow-x: hidden;
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

export const MenuHeader = BaseItem.extend`
	display: flex;
	flex-flow:column;
	height: auto;
	align-items: center;
	justify-content: center;
`

export const MenuFooter = BaseItem.extend`
display: flex;
flex-flow:column;
height: auto;
margin-top:auto;
/* margin-bottom: 30px; */
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