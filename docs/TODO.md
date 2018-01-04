# 1. TODO for odeum-app
<!-- TOC -->

- [1. TODO for odeum-app](#1-todo-for-odeum-app)
	- [1.1. TODO:](#11-todo)
		- [1.1.1. Foundation (Core):](#111-foundation-core)
		- [1.1.2. Extensions:](#112-extensions)
		- [1.1.3. Advanced:](#113-advanced)

<!-- /TOC -->
## 1.1. TODO:

### 1.1.1. Foundation (Core):
- [v] Custom themes available for integration through AppContainer + (test with custom theme)
- [v] Ommit exact prop when using: <Menu route={'/'} exact>. We can check whether route is set to only '/' and add "exact" automatically
- [v] Help label prop? Language ... 
- [v] Page component that basically wraps the functionality of <Menu> to create a page with a route and no label
- [v] Help Redux functions (functional approach)
- [v] Help pop-over menu (draft edition), show content from a static object helpItems = { 0: 'Help 0', 1: 'Help 1', ... 10: 'Help 10' }
	<!-- Help is not getting stuff from a static object but it renders the ID of the active tab/menuItem in a small pop up through Redux-->
- Help Pop-over Styling
- Quick Navigation style object prop
- Quick Navigation select first tab when only 1
- Quick Navigation 'menu' icon default else from theme
<<<<<<< HEAD
- Function to open and close MenuPanel from code/state
=======
- Prop to open and close MenuPanel from code/state (MenuAchordeon)
>>>>>>> b290a680debe5916dcf1f39782836adbe3cf4455
- 404 - page not found component
- Documentation
- How to - manual - README - [www.odeumcode.com](www.odeumcode.com)

### 1.1.2. Extensions:
- Form component
- Login component that composes the actual app login process and stores the login state. Login component is wrapping the main route component (<AppRouter />) to easily distinct between public and private (protected) routes. 
- Responsive API for component builders
- Search
- Notifications
- Error Boundaries
- Tip of the day (show tips or shout-outs after a user logs in or starts the web app)

### 1.1.3. Advanced:
- React Native reusability study (what can we reuse?)
- Draggable Tabs (attach to user menu)
- Draggable Items (pages, folders, images etc...) move to Tab (Accept Drop)

