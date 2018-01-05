import React from 'react'
import Menu from 'components/Menu/Menu'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = ( isLoggedIn, login, routeToLogin, label, redirectTo ) => {
	return (
		isLoggedIn ? <Menu route={routeToLogin ? routeToLogin : '/login'}><Redirect to={redirectTo ? redirectTo : '/' }/></Menu> : <Menu route={routeToLogin ? routeToLogin : '/login'} label={label ? label : 'Login'}>
			<LoginForm login={login}/>
		</Menu>
	)
}
export const LoginWithComponent = (isLoggedIn, Component, routeToLogin, label, redirectTo) => { 
	return (
		isLoggedIn ? <Menu route={routeToLogin ? routeToLogin : '/login'}><Redirect to={redirectTo ? redirectTo : '/'} /></Menu> 
			: <Menu route={routeToLogin ? routeToLogin : '/login'} label={label ? label : 'Login'}>
				<Component/>
			</Menu> 
	)

}
export default Login
