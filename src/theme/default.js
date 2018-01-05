import logo from './logo.svg'

const theme = {
	app: {
		gridArea: 
		'"header header"' 
		+ '"menupanel workspace"' 
		+ '"footer footer"',
		gridTemplateRows: 'auto 1fr auto',
		gridTemplateColumns: 'auto 1fr'
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
	quicknav: {
		button: {
			background: '#216795',
			unselected: '#E3E5E5',
			color: '#FFF'
		},
		tab: {
			selected: '#3B97D3',
			unselected: '#000'
		}
	},

	logo: {		
		margin: '5px',
		height: '35px',
		default: logo
	},	
	input: {
		color: '#2C3E50',
		background: '#ECF0F1',
		focusColor: '#13A085',
		borderRadius: '4px'
	},
	button: {
		background: '#3B97D3',
		color: 'white',
		height: '35px'
	},

	breakpoints: [40, 48, 64, 80]
}

export default theme

