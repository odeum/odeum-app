import styled from 'styled-components'
import media from '../../theme/media'
// import theme from 'theme/default'
import {
	Icon
} from 'odeum-ui'

export const transitionStyles = {
	entering: { visibility: '', opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0, visibility: 'hidden' }
}

export const HelpOverlay = styled.div`
	z-index: 3;
	height: 100vh;
	width: 100vw;
	position:fixed;
	top:0%;
	left:0%;
	cursor: auto;
`

export const HelpPopUpTitleText = styled.div`
	background:	#435C72;
	text-align: center;
	vertical-align: middle;
	color: white;
	padding: 5px;
	font-size: 0.9em;
`

export const HelpPopUp = styled.div`
	background: white;
    border: 1px solid #cbc8c8;
	border-radius: 5px;
	z-index: 4;
	height: ${p => p.small ? '80vh' : '40vh'};
	width: ${p => p.small ? '95vw' : '25vw'};
	min-width: ${p => p.small ? '0' : '330px'};
	position: absolute;
	bottom: ${p => p.small ? '' : '150%'};
	right: ${p => p.small ? '' : '30%'};
	cursor: auto;
	transition: all 300ms ease;
	overflow: auto;
	display: flex;
	flex-flow: column;
`
export const Title = styled.div`
font-weight: 700;
font-size: 17px;
`
export const VerticalDivider = styled.div`
	background: #e3e3e3;
	width: 1px;
	height: 100%;
	margin: 0px 10px;

`

export const HorizontalDivider = styled.div`
	background: #e3e3e3;
	width: 100%;
	height: 1px;
	margin: 10px;
`


export const Bold = styled.b`
	font-size: 12px;
	margin-left: 4px;
`

export const HelpIcon = styled(Icon) `
	&:hover{
		background: ${props => props.theme.tab.hover};
		color: white;
		border-left: 1px solid white;
	}
`

export const HelpDiv = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	flex-flow: row nowrap;
	cursor: pointer;
	border-left: 1px solid #aaa;
	height: 30px;
	align-items: center;
	width: 130px;
	justify-content: center;
	${media.giant`height:30px;`}
	${media.desktop`height:30px;`}
	${media.tablet`height:20px;`}
	${media.phone`height:10px;`}

	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
`

export const HelpButton = styled.div`
	padding: 0 5px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	&:hover{
		background: ${props => props.theme.tab.selected};
		color: white;
		border-left: 1px solid white;
		border-radius: 5px;
	}
	height: 30px;
	${media.giant`height:30px;`}
	${media.desktop`height:30px;`}
	${media.tablet`height:20px;`}
	${media.phone`height:10px;`}
`

export const DescriptionDivStyle = styled.div`
	display: flex;
	flex-flow: ${p => p.orientation};
	text-align: ${p => p.alignment};
	margin: 10px;
	align-items:left;
	flex: ${p => p.orientation !== 'row' ? 2 : 1};
`

export const HelpComponentItem = styled.div`
	display: flex;
	flex-flow: column wrap;
	${p => p.orientation === "row" ? 'flex:1;' : ''}
`