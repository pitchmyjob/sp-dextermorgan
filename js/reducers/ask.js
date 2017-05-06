import { 
	CREATE_ASK_PENDING, CREATE_ASK_FULFILLED, CREATE_ASK_REJECTED
} from '../constants/asks'

const INITIAL_STATE = {
	questions: { pending: false, fulfilled: false, error: null, questions: []}, 
	create:{ pending: false, fulfilled: false, error: null }
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case CREATE_ASK_PENDING:
    	return { ...state, create: { pending: true, fulfilled: false, error: null} }
    case CREATE_ASK_FULFILLED:
        return { ...state, create: { pending: false, fulfilled: true, error:null } }
    case CREATE_ASK_REJECTED:
        return { ...state, create: { pending: false, fulfilled: false, error:action.payload.response } }
    
    default:
    	return state;
  }
}
