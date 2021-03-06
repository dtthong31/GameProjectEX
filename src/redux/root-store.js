import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import gameReducer from './reducers/gameReducer';
const rootReducers = combineReducers({ gameReducer });
const store = createStore(rootReducers, applyMiddleware(thunk));
export { store };