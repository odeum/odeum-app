import ODEUM_Logo from 'theme/logo.svg'

const theme = {
	app: {
		gridArea:
			'"header header"'
			+ '"menupanel workspace"'
			+ '"footer footer"',
		gridTemplateRows: 'auto 1fr auto',
		gridTemplateColumns: 'auto 1fr',
		width: '100vw',
		height: '100vh'
	},
	header: {
		height: '80px',
		background: '#2C3E50',
		color: '#FFF'
	},

	menu: {
		background: '#3B97D3',
		color: '#FFF',
		selected: '#216795',
		hover: '#81C1EA',
		border: '1px solid #3087bf',
		textHover: '#FFF',
		fontSize: 'inherit'
	},

	footer: {
		background: '#F7F7F7',
		color: '#000000'
	},

	workspace: {
		background: '#ECF0F1',
		color: '#000'
	},

	tab: {
		color: '#000',
		activeColor: '#FFF',
		selected: '#3B97D3',
		hover: '#81C1EA',
		unselected: '#E3E5E5'
	},
	icon: {
		default: '#34495D', //not used
		selected: '#FFF' //not used
	},
	quicknav: {
		button: {
			background: '#216795',
			unselected: '#E3E5E5',
			color: '#FFF'
		},
		menu: {
			background: '#216795',
			unselected: '#E3E5E5',
			color: '#216795'
		},
		tab: {
			selected: '#3B97D3',
			unselected: '#000'
		}
	},
	logo: {
		margin: '5px',
		height: '35px',
		default: ODEUM_Logo
	},
	input: {
		color: '#2C3E50',
		background: '#ECF0F1',
		focusColor: '#13A085',
		borderRadius: '4px'
	},
	button: {
		background: '#216795',
		color: 'white',
		height: '30px'
	}
}

export default theme