import {
	ADD_NEW_SPITCH, 
	INIT_NEW_SPITCH_PENDING, INIT_NEW_SPITCH_FULFILLED, INIT_NEW_SPITCH_REJECTED
} from '../constants/spitch'

const INITIAL_STATE = {
	new: { pending: false, fulfilled: false, error: null, id:null, clips:[] },
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case INIT_NEW_SPITCH_PENDING:
    	return { ...state, new: { ...state.new, pending: true, fulfilled: false, error: null } }
    case INIT_NEW_SPITCH_FULFILLED:
        return { ...state, new: { ...state.new, pending: false, fulfilled: true, error:null, id:action.payload.data.id } }
    case INIT_NEW_SPITCH_REJECTED:
        return { ...state, new: { ...state.new, pending: false, fulfilled: false, error:action.payload.response } }


    case ADD_NEW_SPITCH:
    	return { ...state, new: { ...state.new, clips: state.new.clips.concat([action.clip]) } }
    
    default:
    	return state;
  }
}
