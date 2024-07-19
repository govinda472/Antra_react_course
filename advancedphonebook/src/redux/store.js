import { createStore } from 'redux';
import phoneBookReducer from './reducers';

const store = createStore(
  phoneBookReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
