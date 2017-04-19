import { AUTH, AUTH_PENDING, AUTH_FULFILLED, AUTH_REJECTED, AUTH_REQUESTED, AUTH_SIGNUP_USER,
AUTH_SIGNUP_USER_PENDING, AUTH_SIGNUP_USER_FULFILLED, AUTH_SIGNUP_USER_REJECTED } from '../constants/auth'

const INITIAL_STATE = {
  loading: false,
  token: null,
  error: null,
  status:null 
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
   

    case AUTH_PENDING:// sign up user, set loading = true and status = signup
    	return { ...state, loading:true, error:null, token:null, status:null }
    case AUTH_FULFILLED://return user, status = authenticated and make loading = false
    	return { ...state, loading:false, error:null, token:action.payload.token, status:'authenticated' } //<-- authenticated
    case AUTH_REJECTED:// return error and make loading = false
    	error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors      
    	return { ...state, loading:false, error:error, token:null, status:'error'};

    case AUTH_REQUESTED:
    	return { ...state, loading:false, error:null, token:null, status:'unauthorized' }

    case AUTH_SIGNUP_USER_PENDING:
      return { ...state, loading:true, error:null, token:null, status:null }
    case AUTH_SIGNUP_USER_FULFILLED://return user, status = authenticated and make loading = false
      return { ...state, loading:false, error:null, token:action.payload.data.token, status:'authenticated' } //<-- authenticated
    case AUTH_SIGNUP_USER_REJECTED:// return error and make loading = false
      error = action.payload.response.data || {message: action.payload.response};//2nd one is network or server down errors      
      return { ...state, loading:false, error:error, token:null, status:'error'};
    
    default:
    	return state;
  }
}
