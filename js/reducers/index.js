import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import routes from './routes';

export default combineReducers({
	routes,
	form,
});