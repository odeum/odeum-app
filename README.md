<a href="https://github.com/odeum/odeum-app">
  <img alt="ODEUM Code Web App Framework" src="./logotype.png" />
</a>

ODEUM App
======

ODEUM Code Web App Framework. All the basic components to set up the ODEUM Code Web App framework with default styling, menus, tabs, routes and help. 


[![Build Status](https://travis-ci.org/odeum/odeum-app.svg?branch=master)](https://travis-ci.org/odeum/odeum-app)
[![npm](https://img.shields.io/npm/v/odeum-app.svg)](https://www.npmjs.com/package/odeum-app)
![NPM license](https://img.shields.io/npm/l/odeum-app.svg?style=flat)

<!-- TOC -->

- [1. Components:](#1-components)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
	- [3.1. Additional ODEUM Code packages](#31-additional-odeum-code-packages)
	- [3.2. Support packages for your styling and data management](#32-support-packages-for-your-styling-and-data-management)
- [4. How to use odeum-app](#4-how-to-use-odeum-app)
	- [4.1. Theme](#41-theme)
	- [4.2. Configuration:](#42-configuration)
		- [4.2.1. Logo](#421-logo)
		- [4.2.2. Help](#422-help)
	- [4.3. Routing](#43-routing)
	- [4.4. Quick Navigation](#44-quick-navigation)
	- [4.5. Login](#45-login)
	- [4.6. TODO:](#46-todo)
		- [4.6.1. Foundation:](#461-foundation)
		- [4.6.2. Extension:](#462-extension)
		- [4.6.3. Advanced:](#463-advanced)

<!-- /TOC -->

# 1. Components:
- AppContainer
- Header
- MenuPanel
- Menu
- Tab
- Workspace
- Page
- Footer

# 2. Installation
```sh
npm install odeum-app
yarn add odeum-app
```
# 3. Usage

```js
import { 	
	AppContainer, 
	Header, 
	MenuPanel, 
	Menu, 
	Tab, 
	Footer } from 'odeum-app'

// together with ... 

import { 
	Button, 
	ButtonPanel, 
	Modal, 
	Dropdown, 
	Input, 
	Checkbox, 
	ToggleSwitch } from 'odeum-ui'

import { Heading, Text } from 'odeum-primitives'
```

## 3.1. Additional ODEUM Code packages
- ODEUM UI (odeum-app)
- ODEUM Primitives (odeum-primitives)

## 3.2. Support packages for your styling and data management
- Styled Components (styled-components)
- Redux (redux)
- Code splitting
- and all the other cool React stuff you love ... 

# 4. How to use odeum-app

## 4.1. Theme
Default theme is ODEUM Code theme. The theme file contains objects for colors, fonts and sizes for the selected theme.

A theme is passed as a theme prop to the <AppContainer> component. 

If no theme is provided to the AppContainer by the user, the AppContainer loads the default theme provided in the odeum-app package.

```js
import theme from './theme/bluehorizon.js'
...
<AppContainer theme={theme}>
```

On a later stage we might provide setTheme and getTheme functions to pattern check the contents of the theme file to ensure that the objects contains the required values. 

## 4.2. Configuration:
All components exported from **odeum-app** and **odeum-app** has propTypes and defaultProps. 

All defaultProps are loaded with default values so a fully scaled down App template will look like this:
[App_default.js](./src/App_default.js)

A template with named values and more props passed would look like this:
[App_normal.js](./src/App_normal.js)

### 4.2.1. Logo
Default logo is odeumcode_logo.svg which is loaded default by Header component unless it is overwritten by the Header prop "logo={'pathtologo.svg'}"

### 4.2.2. Help
Help ID is initially propagated through props on Menu and Tab components through a helpID prop. 

```js
<Menu {...props} helpID={'e8ea36f3-db70-44c0-85d6-61507b029373'}>
	<Tab {...props} helpID={'386bf263-92ba-4b9e-94b6-aa3ac194af44'}>
	</Tab>
</Menu>
```


## 4.3. Routing
Routing will be encapsulated and processed by the routable components through a route prop. The routable components are:
- AppContainer (makes the logo ('/') routable)
- Menu
- Tab

Examples:

```js
<Menu {...props} route={'/dashboard'} helpID={'e8ea36f3-db70-44c0-85d6-61507b029373'}>
<Tab {...props} route={'/dashboard/timeline'} />
```

If no route props is provided the Menu or Tab component label will be used for automatically creating a route.

## 4.4. Quick Navigation

To pass styles to the responsive Quick Navigation button use the following in MenuPanel directly:

```js
<MenuPanel quicknav={{ label: 'Quick Navigation', icon: 'menu', ... }}>
```
Or pass a style object:

```js
const quicknavStyles = {
	label: 'Quick Navigation', 
	icon: 'menu',
	...
}
...
<MenuPanel quicknav={quicknavStyles}>

```

## 4.5. Login
Component that composes the actual login process for the owner app. The keep the API footprint light we only exhibits the Login component, the rest is up to the app developer. 

Example:

```js
import { 	
	..., 
	Login } from 'odeum-app'
...

this.state = {
	isLoggedIn: false
...
handleLogin = () => {	
	this.setState({ isLoggedIn: })
}


}
<Page route={'/'} exact>
	<Login loggedIn={''}>
		<LoginForm onLoginSuccess={this.handleLogin}/>
	</Login>
</Page>

```

## 4.6. TODO:

### 4.6.1. Foundation:
- [v] Custom themes available for integration through AppContainer + (test with custom theme)
- [v] Ommit exact prop when using: <Menu route={'/'} exact>. We can check whether route is set to only '/' and add "exact" automatically
- [v] Help label prop? Language ... 
- [v] Page component that basically wraps the functionality of <Menu> to create a page with a route and no label
- Help Redux functions (functional approach)
- Help pop-over menu (draft edition), show content from a static object helpItems = { 0: 'Help 0', 1: 'Help 1', ... 10: 'Help 10' }
- Quick Navigation style object prop
- Quick Navigation select first tab when only 1
- Quick Navigation 'menu' icon default else from theme
- Prop to open and close MenuPanel from code/state
- 404 - page not found component

### 4.6.2. Extension:
- Form component
- Login component that composes the actual app login process and stores the login state. Login component is wrapping the main route component (<AppRouter />) to easily distinct between public and private routes. 
- Responsive API for component builders
- Search
- Notifications
- Error Boundaries
- Documentation
- How to - manual - README - [www.odeumcode.com](www.odeumcode.com)

### 4.6.3. Advanced:
- React Native reusability study (what can we reuse?)

