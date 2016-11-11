import { Action } from '@ngrx/store';
import { label } from '../util';


// export enum PreferencesActionTypes {
//     INCREMENT_FONT_SIZE,
//     DECREMENT_FONT_SIZE,
//     RESET_FONT_SIZE
// }

export const PreferencesActionTypes = {
    INCREMENT_FONT_SIZE: label('[Preferences] Increment Font Size'),
    DECREMENT_FONT_SIZE: label('[Preferences] Decrement Font Size'),
    RESET_FONT_SIZE: label('[Preferences] Reset Font Size')
};

export class IncrementFontSizeAction implements Action {
    type = PreferencesActionTypes.INCREMENT_FONT_SIZE;

    constructor(public payload = 1.1) { }
}

export class DecrementFontSizeAction implements Action {
    type = PreferencesActionTypes.DECREMENT_FONT_SIZE;

    constructor(public payload = 1.1) { }
}

export class ResetFontSizeAction implements Action {
    type = PreferencesActionTypes.RESET_FONT_SIZE;

    constructor() { }
}

export type PreferencesActions = IncrementFontSizeAction | DecrementFontSizeAction | ResetFontSizeAction;
