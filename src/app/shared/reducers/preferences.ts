import { Preferences } from '../models/preferences';
import { PreferencesActions, PreferencesActionTypes } from '../actions/preferences';

export interface State {
	fontSize: number;
}

const initialState: Preferences = {
	fontSize: 1
};

export function reducer(state: State = initialState, action: PreferencesActions): State {
	switch (action.type) {
		case PreferencesActionTypes.INCREMENT_FONT_SIZE:
			return Object.assign(state, {fontSize: state.fontSize * 1.1});

		case PreferencesActionTypes.DECREMENT_FONT_SIZE:
			return Object.assign(state, {fontSize: state.fontSize / 1.1});

		case PreferencesActionTypes.RESET_FONT_SIZE:
			return Object.assign(state, {fontSize: 1});

		default:
			return state;
	}
}
