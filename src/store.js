import { createStore, combineReducers } from 'redux';
import attendeeReducer from './reducers/attendeeReducer';

const rootReducer = combineReducers({
  attendeeReducer
});

const store = createStore(rootReducer);

export default store;
