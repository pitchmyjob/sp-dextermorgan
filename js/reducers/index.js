import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import routes from './routes';
import auth from './auth';
import user from './user';
import relation from './relation';


const appReducer = combineReducers({
	routes,
	auth,
	user,
	relation,
	form
})

const rootReducer = (state, action) => {
	if (action.type === 'AUTH_LOGOUT') {
    	state = undefined
  	}

    return appReducer(state, action)
}

export default rootReducer;