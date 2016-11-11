import { Action } from '@ngrx/store';

import { Preferences } from '../models/preferences';
import { PreferencesActions, PreferencesActionTypes } from '../actions/preferences';

export const INCREMENT_FONT_SIZE = 'INCREMENT_FONT_SIZE';
export const DECREMENT_FONT_SIZE = 'DECREMENT_FONT_SIZE';
export const RESET_FONT_SIZE = 'RESET_FONT_SIZE';

const PreferencesInitiales: Preferences = {
	fontSize: 1
};

export function preferencesReducer (state: Preferences = PreferencesInitiales, action: PreferencesActions): Preferences {
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
