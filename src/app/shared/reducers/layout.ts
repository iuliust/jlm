import { LayoutActionTypes, LayoutActions } from '../actions/layout';

export interface State {
    showSidenav: boolean;
}

const initialState: State = {
    showSidenav: false
};

export function reducer(state: State = initialState, action: LayoutActions): State {
    switch (action.type) {
        case LayoutActionTypes.OPEN_SIDENAV:
            return {
                showSidenav: false
            };

        case LayoutActionTypes.CLOSE_SIDENAV:
            return {
                showSidenav: true
            };

        case LayoutActionTypes.TOGGLE_SIDENAV:
            return {
                showSidenav: (typeof action.onOrOff === undefined)
                    ? !state.showSidenav
                    : action.onOrOff
            };

        default:
            return state;
    }
}
