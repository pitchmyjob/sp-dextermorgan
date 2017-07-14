import {
    INIT_NEW_SPITH, ADD_CLIP_NEW_SPITCH, REMOVE_CLIP_NEW_SPITCH, MERGE_CLIP_NEW_SPITCH,
    UPLOAD_SPITCH_PENDING, UPLOAD_SPITCH_FULFILLED, UPLOAD_SPITCH_REJECTED,
    LIKE_SPITCH_PENDING, LIKE_SPITCH_FULFILLED, LIKE_SPITCH_REJECTED,
    RETRIEVE_SPITCH_PENDING, RETRIEVE_SPITCH_FULFILLED, RETRIEVE_SPITCH_REJECTED
} from './SpitchConstants'


const INITIAL_STATE = {
    recorder: {pending: false, fulfilled: false, error: null, id:null, text:null, clips:[], video:null, final:null, thumb:null, progress:0},
    like: {pending: false, fulfilled: false, error: null},
    video: {pending: false, fulfilled: false, error: null, data:null},
};



export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case INIT_NEW_SPITH:
        return { ...state, recorder: { pending: false, fulfilled: false, error: null, id:action.new.id, text:action.new.text, clips:[], video:null } }
    case ADD_CLIP_NEW_SPITCH:
        return { ...state, recorder: { ...state.recorder, clips: state.recorder.clips.concat([action.clip]) } }
    case REMOVE_CLIP_NEW_SPITCH:
    	return { ...state, recorder: { ...state.recorder, clips: state.recorder.clips.slice(0, -1) } }
    case MERGE_CLIP_NEW_SPITCH:
        return { ...state, recorder: { ...state.recorder, video: action.video } }

    case UPLOAD_SPITCH_PENDING:
        return { ...state, recorder: { ...state.recorder, pending: true, fulfilled: false, error: null } }
    case UPLOAD_SPITCH_FULFILLED:
        return { ...state, recorder: { ...state.recorder, pending: false, fulfilled: true, error:null, final:action.video, thumb:action.thumb } }
    case UPLOAD_SPITCH_REJECTED:
        return { ...state, recorder: { ...state.recorder, pending: false, fulfilled: false, error:action.error } }

    case LIKE_SPITCH_PENDING:
        return { ...state, like: { pending: true, fulfilled: false, error: null } }
    case LIKE_SPITCH_FULFILLED:
        return { ...state, like: { pending: false, fulfilled: true, error:null } }
    case LIKE_SPITCH_REJECTED:
        return { ...state, like: { pending: false, fulfilled: false, error:action.error } }

    case RETRIEVE_SPITCH_PENDING:
        return { ...state, video: { pending: true, fulfilled: false, error: null } }
    case RETRIEVE_SPITCH_FULFILLED:
        return { ...state, video: { pending: false, fulfilled: true, error:null, data: action.payload.data } }
    case RETRIEVE_SPITCH_REJECTED:
        return { ...state, video: { pending: false, fulfilled: false, error:action.payload.response } }

    
    default:
    	return state;
  }
}