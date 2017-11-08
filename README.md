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
import { AppContainer, Header, MenuPanel, Menu, Tab, Workspace, Footer } from 'odeum-app'
import { Button, ButtonPanel, Modal, Dropdown, Input, Checkbox, ToggleSwitch } from 'odeum-ui'
import { Heading, Text } from 'odeum-primitives'
```

## Added by you:
- ODEUM UI
- ODEUM Primitives
- Redux
- Routes
- Code splitting
- and all the React stuff you love ... 


### Theme
Default theme is ODEUM Code theme. The theme file contains objects for colors, fonts and sizes for the selected theme.

A theme is passed as a theme prop to the <AppContainer> component. 

If no theme is provided to the AppContainer by the user, the AppContainer loads the default theme provided in the odeum-app package.

```js
import theme from './theme/bluehorizon.js'
...
<AppContainer theme={theme}>
```

We might provide setTheme and getTheme functions to pattern check the contents of the theme file to ensure that the objects contains the required values. 


## Configuration:
All components exported from **odeum-ui** and **odeum-app** has propTypes and defaultProps. 

All defaultProps are loaded with default values so a fully scaled down App template will look like this:
[App_default.js](./src/App_default.js)

A template with named values and more props passed would look like this:
[App_normal.js](./src/App_normal.js)

### Logo
Default logo is odeumcode_logo.svg which is loaded default by Header component unless it is overwritten by the Header prop "logo={'pathtologo.svg'}"

- JSON config file(s) - footer etc. or style objects.

### Workspace components can be functional components (render props) or class components.

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

## 404 - Page Not Found!

