import { LIST_FEED_PENDING, LIST_FEED_FULFILLED, LIST_FEED_REJECTED,
	NEXT_FEED_PENDING, NEXT_FEED_FULFILLED, NEXT_FEED_REJECTED,
    REFRESH_FEED_PENDING, REFRESH_FEED_FULFILLED, REFRESH_FEED_REJECTED
} from './FeedConstants'


const INITIAL_STATE = {
	pending: false, 
	error: null, 
	fulfilled: false,
	pagination: null,
	nextPending: false, 
	nextFetched: false,
	refreshPending: false,
	list:[]
};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case REFRESH_FEED_PENDING:
        return { ...state, refreshPending: true }
    case REFRESH_FEED_REJECTED:
        return { ...state, refreshPending: false  }
    case REFRESH_FEED_FULFILLED:
        return { ...state, 
            refreshPending: false, 
            list: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined}  }


    case LIST_FEED_PENDING:
        return { ...state, pending: true, fulfilled: false, error:null }
    case LIST_FEED_REJECTED:
        return { ...state, pending: false, fulfilled: false, error:action.payload.response  }
    case LIST_FEED_FULFILLED:
        return { ...state, 
        	pending: false, 
        	fulfilled: true, 
        	error:null, 
        	list: action.payload.data.results, 
        	pagination: {...action.payload.data, results: undefined}  }


    case NEXT_FEED_PENDING:
    	return { ...state, nextPending: true, nextFetched: false, error:null }
   	case NEXT_FEED_REJECTED:
    	return { ...state, nextPending: false, nextFetched: false, error:action.payload.response }
    case NEXT_FEED_FULFILLED:
        return { ...state, 
        	nextPending: false, 
        	nextFetched: true, 
        	error:null, 
        	list: state.list.concat(action.payload.data.results), 
        	pagination: {...action.payload.data, results: undefined}  }
    

    default:
    	return state;
  }
}