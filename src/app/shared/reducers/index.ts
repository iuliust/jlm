import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/let';
// import { combineLatest } from 'rxjs/observable/combineLatest';
// import { ActionReducer } from '@ngrx/store';

import * as fromLayout from './layout';
import * as fromPreferences from './preferences';
import { share, Selector } from '../util';

export interface State {
    layout: fromLayout.State;
    preferences: fromPreferences.State;
}

const reducers = {
    preferences: fromPreferences.reducer,
    layout: fromLayout.reducer
};

const productionReducers = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducers(state, action);
}

export const getLayoutState = (state$: Observable<State>) =>
    state$.select(state => state.layout);

export const getShowSidenav = share(compose(fromLayout.getShowSidenav, getLayoutState));
