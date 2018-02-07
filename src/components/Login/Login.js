import React from 'react'
import Menu from '../Menu/Menu'
import { Redirect } from 'react-router-dom'
import LoginDefaultForm from './LoginDefaultForm'


const LoginForm = ( isLoggedIn, login, routeToLogin, label, redirectTo ) => {
	return (
		isLoggedIn ? <Menu icon={'lock_outline'} route={routeToLogin ? routeToLogin : '/login'}><Redirect to={redirectTo ? redirectTo : '/' }/></Menu> : <Menu icon={'lock_outline'} route={routeToLogin ? routeToLogin : '/login'} label={label ? label : 'Login'}>
			<LoginDefaultForm login={login}/>
		</Menu>
	)
}
export const LoginCustomForm = (isLoggedIn, Component, routeToLogin, label, redirectTo) => { 
	return (
		isLoggedIn ? <Menu route={routeToLogin ? routeToLogin : '/login'} icon={'lock_outline'}><Redirect to={redirectTo ? redirectTo : '/'} /></Menu> 
			: <Menu route={routeToLogin ? routeToLogin : '/login'} label={label ? label : 'Login'} icon={'lock_outline'}>
				<Component/>
			</Menu> 
	)

}
export default LoginForm
