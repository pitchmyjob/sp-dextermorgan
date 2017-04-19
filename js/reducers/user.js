import { USER_FROM_TOKEN } from '../constants/users'

const INITIAL_STATE = {
	profile: null, 
	status:null, 
	error:null, 
	loading: false
};


//user = userobj, 
// status can be: 
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up) 
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin) 
// 6. 'logout' (after logout)


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    // case SIGNUP_USER_PENDING:// sign up user, set loading = true and status = signup
    // 	return { ...state, user: null, status:'signup', error:null, loading: true }
    // case SIGNUP_USER_FULFILLED://return user, status = authenticated and make loading = false
    //     data = action.payload.data
    //     delete data['token']
    // 	return { ...state, user: action.payload.data, error:null, loading: false, status:'valide'}; //<-- authenticated
    // case SIGNUP_USER_REJECTED:// return error and make loading = false
    // 	error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors      
    // 	return { ...state, user: null, status:'signup', error:error, loading: false};

    case USER_FROM_TOKEN:// sign up user successful
    	return { ...state, profile: action.payload, status:'validate', error:null, loading: false }
    
    default:
    	return state;
  }
}