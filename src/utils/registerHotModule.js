import React from 'react'
import { render } from 'react-dom'

export const registerHotModule = () => {
	if (module.hot) {
		module.hot.accept('../../components/AppRouter/AppRouter', () => {
			const NextApp = require('../../components/AppRouter/AppRouter').default
			render(
				<NextApp />,
				document.getElementById('root')
			)
		})
	}
}
