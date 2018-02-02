import styled from 'styled-components'
import media from '../../theme/media'
import { rowColCalc, spanCalc, spanRowCalc } from '../utils/Functions'

export const Bold = styled.b`
	font-weight: 600;
`
export const StyledFooter = styled.div`
	grid-area: footer;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	/* width: 100vw; */
	height:40px;
	background: ${props => props.theme.footer.background};
	color: ${props => props.theme.footer.color};
	-webkit-box-shadow: 0 0 3px 0 #ccc;
	-moz-box-shadow: 0 0 3px 0 #ccc;
	box-shadow: 0 0 3px 0 #ccc;
	color: ${p => p.theme.footer ? p.theme.footer.color : '#5e5e5e'};
	font-size: 13px;
	font-weight: 300;
	text-align: center;
	user-select: none;
	${media.giant`height:40px;`}
	${media.desktop`height:40px;`}
	${media.tablet`height:30px;`}
	${media.phone`height:0px;`}

	/* IE Support */
	-ms-grid-column: ${p => rowColCalc(p.theme.app.gridArea, 'footer', 'column')};
	-ms-grid-row: ${p => rowColCalc(p.theme.app.gridArea, 'footer', 'row')};
	-ms-grid-column-span: ${p => { var x = spanCalc(p.theme.app.gridArea, 'footer', 'column'); return x > 1 ? x : 'none'} };
	-ms-grid-row-span: ${p => {var y = spanRowCalc(p.theme.app.gridArea, 'footer'); return y > 1 ? y : 'none'}};
`

export const Link = styled.a`
	text-decoration: none;
	align-items: center;
	justify-content: center;
	color: inherit;
`
