import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

//#region Header button

export const RoundButton = styled.div`
	background: none;
	color: ${props => props.theme.quicknav.button.background};
	width: 30px;
	height:30px;
	border-radius: 30px;
	display:flex;
	justify-content:center;
	align-items:center;
	justify-self:flex-end;
`
export const Header = styled.div`
	display:grid;
	grid-template-rows: auto;
	grid-auto-flow:column;
	justify-items: center;
`
export const SubHeader = styled.div`
	display:flex;
	align-items:center;
	justify-self: flex-start;
`
//#endregion
export const Link = styled(NavLink) `
    text-decoration:none;
    color: inherit;
    display: flex;
	flex-flow: column;
    align-items:center;
    justify-content: center;
    height:100%;
    width:100%;
`

//#region Menu Button & List

export const MenuItem = styled.div`
    background:${(props) => props.index === props.activeMenu ? props.theme.quicknav.menu.color : props.theme.quicknav.menu.unselected};
    color: ${props => props.index === props.activeMenu ? props.theme.quicknav.menu.unselected : props.theme.quicknav.menu.color};
    height:50px;
    display: flex;
	flex-flow: column;
    align-items:center;
    justify-content: center;
    border-radius:5px;
	min-width: 100px;
    margin:0px 7px;
    padding: 0px 7px;
    &:first-child{
        margin-left:1px;
    }
	&:hover{
		border: 10px;
		border-color: rgba(59,151,211,0.3);
		box-shadow: 0 0 0 3px rgba(59,151,211,0.3);
		}

    cursor:pointer;
`
export const MenuList = styled.div`
    display: grid;
	align-content: center;
	grid-auto-flow: column;
	grid-auto-columns: max-content;
/* 	display: flex;
	flex-flow: column wrap; 
	justify-content:space-evenly;*/
	height: 70px;
	max-height:70px;
	margin: 0;
	padding:0;
	line-height:15px;
	align-items:center;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	width:90vw;
`

//#endregion

//#region Tab Text & List

export const TabItem = styled(NavLink) `
    text-decoration: none;
    min-width: auto;
    padding:0px 15px;
    height: 20px;
    color:${props => props.activetab === 'true' ? props.theme.quicknav.tab.selected : props.theme.quicknav.tab.unselected};
    cursor:pointer;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`


export const TabList = styled.div`
    display: grid;
	grid-auto-columns: auto;
	align-content: center;
	grid-auto-flow: column;
    height: 25px;
    max-height:50px;
    margin: 0;
    padding:20px 0px;
    line-height:20px;
	-webkit-overflow-scrolling: touch;
    overflow-x: auto;
    width:90vw;
	white-space: nowrap;
	overflow-y:hidden;
`

//#endregion

//#region QuickNav Button, Overlay and Spacer

export const QuickNav = styled.div`
    background:red;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 1;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
`

export const QuickNavButton = styled.div`
    background: ${props => props.theme.quicknav.button.background};
    border: none;
    border-radius: 15px;
    color: ${props => props.theme.quicknav.button.color};
    padding: 10px 15px;
    position:fixed;
    bottom: 10%;
    align-self:center;
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.tab.hover};
    }
	display: flex;
	align-items: center;
	justify-content: center;
`
export const QuickNavButtonHidden = styled.div`
    border: none;
    border-radius: 15px;
    padding: 30px 100vw;
    position:fixed;
    bottom: 0%;
    align-self:center;
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.tab.hover};
}
display: flex;
align-items: center;
justify-content: center;
`
export const QuickNavMenu = styled.div`
    display:grid;
	grid-template-columns: auto;
	grid-template-rows: 50px 1px 50px 1px 70px;
    justify-content: flex-end;
    align-items:center;
    flex-flow:column wrap;
    background:white;
    height:${p => p.quickNav ? '100%' : '0%'};
    max-height: 210px;
    border-radius: 5px;
    border: 1px solid #cbc8c8;
    padding:${p => p.quickNav ? '5px' : '0px'};
    transition: 100ms all ease;
`
export const QuickNavContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    flex-flow: column nowrap;
    color:black;
    width: 100vw;
    height: ${props => props.quickNav && !props.helpOpen ? '100vh' :
		props.helpOpen && !props.quickNav ? '100vh' : '0px'};
    overflow: hidden;
    position:fixed;
    z-index:2;
    transition: height 200ms ease-in-out;
    bottom: 0;
`

export const Spacer = styled.div`
	width: 90vw;
	min-height: 1px;
	background: #cbc8c8;
`

//#endregion