import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const QuickNav = styled.div`
    z-index: 1; 
    display: flex; 
    flex-flow: row nowrap;
    align-items: center; 
    justify-content: center;
`
export const Link = styled(NavLink)`
    text-decoration:none;
    background:${props => props.theme.quicknav.button.background};
    color: ${props => props.theme.quicknav.button.color};
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    height:100%;
    width:100%;
`
export const MenuItem = styled.div`
    background:${props => props.theme.quicknav.button.background};
    color: ${props => props.theme.quicknav.button.color};
    height:50px;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    border-radius:4px;
    margin:0px 15px;
    padding: 0px 15px;
    &:first-child{
        margin-left:1px;
    }
    cursor:pointer;
`

export const TabItem = styled(NavLink)`
    text-decoration: none;
    min-width: 50px;
    margin:0px 30px;
    height: 30px;
    color:black;
    &:hover{
        color: royalblue;
    }
    &:first-child{
        margin-left:15px;
    }
    cursor:pointer;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`

export const Spacer = styled.div`
    display: flex;
    width: 90vw;
    min-height: 1px;
    background: #cbc8c8;
`
export const MenuList = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 45px;
    max-height:45px;
    margin: 0;
    padding:0;
    line-height:15px;
    justify-content: space-evenly;
    align-items:center;
    overflow-x: auto;
    width:90vw;
`

export const TabList = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items:center;
    justify-content:center;
    height: 45px;
    max-height:50px;
    margin: 0;
    padding:5px;
    line-height:35px;
    overflow-x: auto;
    width:90vw;
`

export const QuickNavButton = styled.div`
    background: ${props => props.theme.quicknav.button.background};
    border: none;
    border-radius: 7px;
    color: ${props => props.theme.quicknav.button.color};
    padding: 10px 15px;
    position:fixed;
    bottom: 10%;
    align-self:center;
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.tab.hover}
    }
`
export const QuickNavMenu = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    flex-flow:column wrap;
    background:white;
    height:100%;
    max-height: 210px;
    border-radius: 5px;
    border: 1px solid #cbc8c8;
    padding: 5px;
`
export const QuickNavContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    flex-flow: column nowrap;
    color:black;
    width: 100vw;
    height: ${props => props.quickNav ? '100vh' : '0px'};
    overflow: hidden;
    position:fixed;
    z-index:2;
    transition: height 300ms ease-in-out;
    bottom: 0;
`