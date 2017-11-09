import ODEUM_Logo from 'theme/logo.svg'
import ODEUM_icon from 'theme/logo_icon.svg'
const theme = {
	header: {
		background: '#2C3E50',
		color: '#FFF'
	},

	menu: {
		background: '#3B97D3',
		color: '#FFF',
		selected: '#216795',
		hover: '#81C1EA',
		bottomBorder: '1px solid #3087bf'
	},

	footer: {
		background: '#F7F7F7',
		color: '#5E5E5E'
	},

	workspace: {
		background: '#ECF0F1',
		color: '#000'
	},

	tab: {
		background: '#3B97D3',
		color: '#FFF',
		selected: '#3B97D3',
		hover: '#81C1EA',
		unselected: '#E3E5E5'
	},
	icon: {
		default: '#34495D',
		selected: '#FFF'
	},
	 logo: {
		 default: ODEUM_Logo,
		 bigLogo: ODEUM_Logo,
		 smallLogo: ODEUM_icon
	 }
}

export default theme

