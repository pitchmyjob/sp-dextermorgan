import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import routes from './routes';
import auth from './auth';
import user from './user';
import relation from './relation';
import ask from './ask';
import search from './search';
import notification from './notification';
import spitch from './spitch';


const appReducer = combineReducers({
	routes,
	auth,
	user,
	relation,
	ask,
	search,
	notification,
	spitch,
	form
})

const rootReducer = (state, action) => {
	if (action.type === 'AUTH_LOGOUT') {
    	state = undefined
  	}

    return appReducer(state, action)
}

export default rootReducer;