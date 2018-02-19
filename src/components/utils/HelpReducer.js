import { createStore } from 'redux'

const SET_HELP_ID = 'SetHelpID'
const APP_ID = 'APP_ID'

const setHelp = (helpID) => ({
	type: SET_HELP_ID,
	payload: helpID
})

const setApp = (appID) => ({
	type: APP_ID,
	payload: appID
})

const initialState = {
	app_id: '',
	helpID: 0
}
const HelpReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP_ID:
			return {
				appID: action.payload
			}
		case SET_HELP_ID:
			return {

				helpID: action.payload
			}

		default:
			return state
	}
}

const store = createStore(HelpReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const SetHelpID = (id) => {
	store.dispatch(setHelp(id))
}

export const GetHelpID = () => {
	return store.getState().helpID
}

export const SetAppID = (id) => {
	store.dispatch(setApp(id))
}

export const GetAppID = (id) => {
	return store.getState().app_id
}