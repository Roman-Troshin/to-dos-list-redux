import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux';
import { thunk } from 'redux-thunk';

import { toDosReducer, userSettingsReducer } from './reducers';

const appReducer = combineReducers({
	toDos: toDosReducer,
	userSettings: userSettingsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
