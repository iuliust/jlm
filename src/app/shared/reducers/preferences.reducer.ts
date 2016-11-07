import { ActionReducer, Action } from '@ngrx/store';

import { Preferences } from '../';

export const INCREMENT_FONT_SIZE = 'INCREMENT_FONT_SIZE';
export const DECREMENT_FONT_SIZE = 'DECREMENT_FONT_SIZE';
export const RESET_FONT_SIZE = 'RESET_FONT_SIZE';

export const preferencesReducer: ActionReducer<Preferences> = (state: Preferences = { fontSize: 1 }, action: Action) => {
	switch (action.type) {
		case INCREMENT_FONT_SIZE:
			return Object.assign(state, {fontSize: state.fontSize * 1.1});
		case DECREMENT_FONT_SIZE:
			return Object.assign(state, {fontSize: state.fontSize / 1.1});
		case RESET_FONT_SIZE:
			return Object.assign(state, {fontSize: 1});
		default:
			return state;
	}
};
