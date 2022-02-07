import filterReducer from './filter';
import activeReducer from './active';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filterReducer,
    activeReducer,
});

export default rootReducer;