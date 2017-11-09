# odeum-app

ODEUM Code Web App Framework. All the basic components to set up the ODEUM Code Web App framework with default styling, menus, tabs, routes and help. 

## Components:
- AppContainer
- Header
- MenuPanel
- Menu
- Tab
- Workspace
- Footer
- Logo

```js
import { 	
	AppContainer, 
	Header, 
	MenuPanel, 
	Menu, 
	Tab, 
	Workspace, 
	Footer } from 'odeum-app'

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

## Added by you:
- ODEUM UI (odeum-ui)
- ODEUM Primitives (odeum-primitives)
- Styled Components (styled-components)
- Redux (redux)
- Code splitting
- and all the other cool React stuff you love ... 


### Theme
Default theme is ODEUM Code theme. The theme file contains objects for colors, fonts and sizes for the selected theme.

A theme is passed as a theme prop to the <AppContainer> component. 

If no theme is provided to the AppContainer by the user, the AppContainer loads the default theme provided in the odeum-app package.

```js
import theme from './theme/bluehorizon.js'
...
<AppContainer theme={theme}>
```

On a later stage we might provide setTheme and getTheme functions to pattern check the contents of the theme file to ensure that the objects contains the required values. 

## Configuration:
All components exported from **odeum-ui** and **odeum-app** has propTypes and defaultProps. 

All defaultProps are loaded with default values so a fully scaled down App template will look like this:
[App_default.js](./src/App_default.js)

A template with named values and more props passed would look like this:
[App_normal.js](./src/App_normal.js)

### Logo
Default logo is odeumcode_logo.svg which is loaded default by Header component unless it is overwritten by the Header prop "logo={'pathtologo.svg'}"

### Workspace components uses composition to build your app.

## Routing
Routing will be encapsulated and processed by the routable components through a route prop. The routable components are:
- AppContainer (makes the logo routable)
- Menu
- Tab

Examples:

```js
<Menu {...props} route={'/dashboard'}>
<Tab {...props} route={'/dashboard/timeline'} />

```
If no route props is provided the Menu or Tab component label will be used for automatically creating a route.

## 404 - Page Not Found!

