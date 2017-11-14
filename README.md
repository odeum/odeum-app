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
- [How to use odeum-app](#how-to-use-odeum-app)
		- [3.2.1. Theme](#321-theme)
	- [3.3. Configuration:](#33-configuration)
		- [3.3.1. Logo](#331-logo)
		- [3.3.2. Help](#332-help)
	- [3.4. Routing](#34-routing)
	- [3.5. TODO:](#35-todo)

<!-- /TOC -->

# 1. Components:
- AppContainer
- Header
- MenuPanel
- Menu
- Tab
- Workspace
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

# How to use odeum-app

### 3.2.1. Theme
Default theme is ODEUM Code theme. The theme file contains objects for colors, fonts and sizes for the selected theme.

A theme is passed as a theme prop to the <AppContainer> component. 

If no theme is provided to the AppContainer by the user, the AppContainer loads the default theme provided in the odeum-app package.

```js
import theme from './theme/bluehorizon.js'
...
<AppContainer theme={theme}>
```

On a later stage we might provide setTheme and getTheme functions to pattern check the contents of the theme file to ensure that the objects contains the required values. 

## 3.3. Configuration:
All components exported from **odeum-app** and **odeum-app** has propTypes and defaultProps. 

All defaultProps are loaded with default values so a fully scaled down App template will look like this:
[App_default.js](./src/App_default.js)

A template with named values and more props passed would look like this:
[App_normal.js](./src/App_normal.js)

### 3.3.1. Logo
Default logo is odeumcode_logo.svg which is loaded default by Header component unless it is overwritten by the Header prop "logo={'pathtologo.svg'}"

### 3.3.2. Help
Help ID is initially propagated through props on Menu and Tab components through a helpID prop. 

```js
<Menu {...props} helpID={'e8ea36f3-db70-44c0-85d6-61507b029373'}>
	<Tab {...props} helpID={'386bf263-92ba-4b9e-94b6-aa3ac194af44'}>
	</Tab>
</Menu>
```


## 3.4. Routing
Routing will be encapsulated and processed by the routable components through a route prop. The routable components are:
- AppContainer (makes the logo ('/') routable)
- Menu
- Tab

Examples:

```js
class Help 
<Menu {...props} route={'/dashboard'} helpID={'e8ea36f3-db70-44c0-85d6-61507b029373'}>
<Tab {...props} route={'/dashboard/timeline'} />
```

If no route props is provided the Menu or Tab component label will be used for automatically creating a route.

## 3.5. TODO:
- Custom themes available for integration through AppContainer + (test with custom theme)
- Refactoring styles, naming, structure - emphasize code style
- Documentation (up until now and continously)
- 404 - page not found component
- New responsive menu
- Responsive API for component builders
- Redux for dispatching setHelpID and retrieving getHelpID from state
- Help pop-over menu
- Dynamic tabs
- Login (Logout)
- Avatar (gravatar integration)
- Search
- Notifications
- Error Boundaries
- How to - manual - README (www.odeumcode.com)
