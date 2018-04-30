import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers';

const redStore = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default redStore