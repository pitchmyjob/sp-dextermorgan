import { LIST_NOTIFICATION_PENDING, LIST_NOTIFICATION_FULFILLED, LIST_NOTIFICATION_REJECTED
} from '../constants/notification'

const INITIAL_STATE = {
	pending: false, 
	error: null, 
	fulfilled: false,
	lists:[]
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case LIST_NOTIFICATION_PENDING:
        return { ...state, pending: true, fulfilled: false, error:null }
    case LIST_NOTIFICATION_FULFILLED:
        return { ...state, pending: false, fulfilled: true, error:null, lists: action.payload.data.items  }
    case LIST_NOTIFICATION_REJECTED:
        return { ...state, pending: false, fulfilled: false, error:action.payload.response  }
    
    
    default:
    	return state;
  }
}

