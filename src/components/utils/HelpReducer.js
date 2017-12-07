import { createStore } from 'redux'

const SET_HELP_ID = 'SetHelpID'

const setHelp = (helpID) => ({
	type: SET_HELP_ID,
	payload: helpID
})

const initialState = {
	helpID: 0
}
const HelpReducer = (state = initialState, action) => {
	switch (action.type) {

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