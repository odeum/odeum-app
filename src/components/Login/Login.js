import React from 'react'
import Menu from '../Menu/Menu'
import { Redirect } from 'react-router-dom'


const Login = ({ isLoggedIn, login, area, component }) => {
	return (
	  isLoggedIn ?   <Menu route={'/login'}><Redirect to={'/'}/></Menu> : <Menu route={'/login'} label={'Login'}>
		  				<button onClick={login}> Log me in</button>
					 </Menu>
	)
}

export default Login
