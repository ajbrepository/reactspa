import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
//Redux Integration
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
//App Redux components
import allReducers from './store/reducers';
import {storeActiveUser} from './store/actions/index'
import redStore from './store/util/createStore'

//redStore.dispatch(storeActiveUser({name:'XYZ',displayName:'XYZ@abc.com'}));
console.log('From index ---- Store ::'+redStore);
ReactDOM.render(<Provider store={redStore}><App /></Provider>, document.getElementById('app'));
registerServiceWorker();
