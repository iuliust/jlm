import { Action } from '@ngrx/store';
import { label } from '../util';

export const LayoutActionTypes = {
    OPEN_SIDENAV: label('[Layout] Open Sidenav'),
    CLOSE_SIDENAV: label('[Layout] Close Sidenav'),
    TOGGLE_SIDENAV: label('[Layout] Toggle Side Nav'),
};

export class OpenSidenav implements Action {
    type = LayoutActionTypes.OPEN_SIDENAV;

    constructor() { }
}

export class CloseSidenav implements Action {
    type = LayoutActionTypes.CLOSE_SIDENAV;

    constructor() { }
}

export class ToggleSidenav implements Action {
    type = LayoutActionTypes.TOGGLE_SIDENAV;

    constructor(public onOrOff: boolean) { }
}

export type LayoutActions = OpenSidenav
    | CloseSidenav
    | ToggleSidenav;
