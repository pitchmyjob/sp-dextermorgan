import { 
	LIST_TOP_SPITCHER_PENDING, LIST_TOP_SPITCHER_FULFILLED, LIST_TOP_SPITCHER_REJECTED,
    LIST_TOP_TAG_PENDING, LIST_TOP_TAG_FULFILLED, LIST_TOP_TAG_REJECTED
} from '../constants/search'

const INITIAL_STATE = {
	tags: { pending: false, fulfilled: false, error: null, lists:[] }, 
	spitchers:{ pending: false, fulfilled: false, error: null, lists: [] }
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case LIST_TOP_SPITCHER_PENDING:
    	return { ...state, spitchers: { ...state.spitchers, pending: true, fulfilled: false, error: null } }
    case LIST_TOP_SPITCHER_FULFILLED:
        return { ...state, spitchers: { ...state.spitchers, pending: false, fulfilled: true, error:null, lists:action.payload.data } }
    case LIST_TOP_SPITCHER_REJECTED:
        return { ...state, spitchers: { ...state.spitchers, pending: false, fulfilled: false, error:action.payload.response } }


    case LIST_TOP_TAG_PENDING:
        return { ...state, tags: { ...state.tags, pending: true, fulfilled: false, error: null } }
    case LIST_TOP_TAG_FULFILLED:
        return { ...state, tags: { ...state.tags, pending: false, fulfilled: true, error:null, lists:action.payload.data } }
    case LIST_TOP_TAG_REJECTED:
        return { ...state, tags: { ...state.tags, pending: false, fulfilled: false, error:action.payload.response } }
    
    default:
    	return state;
  }
}
