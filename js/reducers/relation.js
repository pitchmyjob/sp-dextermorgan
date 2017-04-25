import { LIST_FACEBOOK_FRIEND_PENDING, LIST_FACEBOOK_FRIEND_FULFILLED, LIST_FACEBOOK_FRIEND_REJECTED,
         FOLLOW_USER_PENDING, FOLLOW_USER_FULFILLED, FOLLOW_USER_REJECTED,
         FOLLOW_FACEBOOK_FRIEND,
         FOLLOW_ALL_USER_PENDING, FOLLOW_ALL_USER_FULFILLED, FOLLOW_ALL_USER_REJECTED,
         CREATE_FACEBOOK_FRIEND_PENDING, CREATE_FACEBOOK_FRIEND_FULFILLED, CREATE_FACEBOOK_FRIEND_REJECTED
} from '../constants/relations'

const INITIAL_STATE = {
	facebook: { pending: false, fulfilled: false, error: null, friends: []}, 
	follow:{ pending: false, fulfilled: false, error: null }
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case LIST_FACEBOOK_FRIEND_PENDING:
    	return { ...state, facebook: { pending: true, fulfilled: false, error: null, friends: []} }
    case LIST_FACEBOOK_FRIEND_FULFILLED:
        return { ...state, facebook: { pending: false, fulfilled: true, error: null, friends: action.payload.data} }
    case LIST_FACEBOOK_FRIEND_REJECTED:
        return { ...state, facebook: { pending: false, fulfilled: false, error: action.payload.response, friends: []} }

    case FOLLOW_USER_PENDING:
        return { ...state, follow: { pending: true, fulfilled: false, error:null } }
    case FOLLOW_USER_FULFILLED:
        return { ...state, follow: { pending: false, fulfilled: true, error:null } }
    case FOLLOW_USER_REJECTED:
        return { ...state, follow: { pending: false, fulfilled: false, error:action.payload.response } }

    case FOLLOW_ALL_USER_PENDING:
        return { ...state, facebook: { ...state.facebook, pending: true, fulfilled: false} }
    case FOLLOW_ALL_USER_FULFILLED:
        return { ...state, facebook: { ...state.facebook, pending: true, fulfilled: false} }
    case FOLLOW_ALL_USER_REJECTED:
        return { ...state, facebook: { ...state.facebook, pending: false, fulfilled: false, error:action.payload.response} }

    case CREATE_FACEBOOK_FRIEND_PENDING:
        return { ...state, facebook: { ...state.facebook, pending: true, fulfilled: false} }
    case CREATE_FACEBOOK_FRIEND_FULFILLED:
        return { ...state, facebook: { ...state.facebook, pending: false, fulfilled: false} }
    case CREATE_FACEBOOK_FRIEND_REJECTED:
        return { ...state, facebook: { ...state.facebook, pending: false, fulfilled: false, error:action.payload.response} }

    case FOLLOW_FACEBOOK_FRIEND:
        return { 
            ...state,
            facebook: { ...state.facebook, 
                        friends: state.facebook.friends.map(function(item) {
                             if(item.id == action.meta.id){
                                item.follow=true
                             }
                              return item
                          })
                    }
        }


    
    default:
    	return state;
  }
}
