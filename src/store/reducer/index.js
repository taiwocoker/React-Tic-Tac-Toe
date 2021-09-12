import { combineReducers } from 'redux';
import { ReduxGlobalReducer } from './global.reducer';
import { ReduxGameSettingsReducer } from './gameSettings.reducer';

const allReducers = combineReducers({
    global: ReduxGlobalReducer,
    gameSettings: ReduxGameSettingsReducer,
});

export default allReducers;
