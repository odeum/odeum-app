import styled from 'styled-components'
import theme from 'theme/default'
import media from 'theme/media'

export const Bold = styled.b`
	font-weight: 600;
`
export const StyledFooter = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 40px;
	background: ${theme.footer.background};
	color: ${theme.footer.color};
	-webkit-box-shadow: 0 0 3px 0 #ccc;
	-moz-box-shadow: 0 0 3px 0 #ccc;
	box-shadow: 0 0 3px 0 #ccc;
	color: #5e5e5e;
	font-size: 13px;
	font-weight: 300;
	text-align: center;
	user-select: none;
	${media.giant`height:40px;`}
	${media.desktop`height:40px;`}
	${media.tablet`height:30px;`}
	${media.phone`height:20px;`}
`

export const Link = styled.a`
	text-decoration: none;
	align-items: center;
	justify-content: center;
	color: black;
`
