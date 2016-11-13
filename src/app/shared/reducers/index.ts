import * as fromLayout from './layout';
import * as fromPreferences from './preferences';

export interface State {
    layout: fromLayout.State;
    preferences: fromPreferences.State;
}
