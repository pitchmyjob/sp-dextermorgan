import { 
    USER_FROM_TOKEN,
    UPDATE_USER_PENDING, UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED,
    RETREIVE_USER_PENDING, RETREIVE_USER_FULFILLED, RETREIVE_USER_REJECTED,
    VISIT_USER_PENDING, VISIT_USER_FULFILLED, VISIT_USER_REJECTED
 } from '../constants/users'

const INITIAL_STATE = {
	profile: null, 
	status:null, 
	error:null, 
	loading: false,
    me: { pending: false, error: null, fulfilled: false, datas:null, asks:[], spitchs:[] },
    visit:{ pending: false, error: null, fulfilled: false, profile:null, datas:null, asks:[], spitchs:[] },
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
    case UPDATE_USER_PENDING:
        return { ...state, loading: true, error:null }
    case UPDATE_USER_FULFILLED:
        return { ...state, loading: false, error:null }
    case UPDATE_USER_REJECTED:
        return { ...state, profile: action.payload, loading: false , error:action.payload.response}

    case USER_FROM_TOKEN:
    	return { ...state, profile: action.payload, status:'validate', error:null, loading: false }

    case RETREIVE_USER_PENDING:
        return { ...state, me: { ...state.me, pending: true, fulfilled: false } }
    case RETREIVE_USER_FULFILLED:
        return { ...state, me: { ...state.me, pending: false, fulfilled: true, asks:action.payload.data.asks, 'spitchs':action.payload.data.spitchs, 'datas': action.payload.data.datas } }
    case RETREIVE_USER_REJECTED:
        return { ...state, me: { ...state.me, pending: false, error:action.payload.response } }

    case VISIT_USER_PENDING:
        return { ...state, visit: { ...state.visit, pending: true, fulfilled: false } }
    case VISIT_USER_FULFILLED:
        var datas = action.payload.data
        var profile = { 
            'follow': datas.follow, 'username': datas.username, 'id': datas.id, 'title': datas.title, 'photo': datas.photo, 'first_name': datas.first_name, 'last_name':datas.last_name
        };
        return { ...state, visit: { ...state.visit, pending: false, profile:profile, fulfilled: true, asks:action.payload.data.asks, 'spitchs':action.payload.data.spitchs, 'datas': action.payload.data.datas } }
    case VISIT_USER_REJECTED:
        return { ...state, visit: { ...state.visit, pending: false, error:action.payload.response } }

    default:
    	return state;
  }
}