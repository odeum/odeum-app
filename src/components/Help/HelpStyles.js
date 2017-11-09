import styled from 'styled-components'
import media from 'theme/media'
import theme from 'theme/default'
import { Icon as DefaultIcon } from 'odeum-ui'

export const Bold = styled.b`
	font-size: 12px;
	margin-left: 4px;
`

export const Icon = styled(DefaultIcon)`
	&:hover{
		background: ${theme.tab.hover};
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
	width: ${props => props.small ? '30px' : '130px'};
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
		background: ${theme.tab.selected};
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