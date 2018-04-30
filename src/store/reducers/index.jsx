import {combineReducers} from 'redux';
import ActiveUserReducer from './reducer-auth-user';
import LoggedInUser from './reducer-logged-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    activeUser: ActiveUserReducer,
    userSelected : LoggedInUser
});

export default allReducers