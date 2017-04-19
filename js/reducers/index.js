import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import routes from './routes';
import auth from './auth';
import user from './user';

export default combineReducers({
	routes,
	auth,
	user,
	form
});