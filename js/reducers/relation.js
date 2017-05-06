import { LIST_FACEBOOK_FRIEND_PENDING, LIST_FACEBOOK_FRIEND_FULFILLED, LIST_FACEBOOK_FRIEND_REJECTED,
         FOLLOW_USER_PENDING, FOLLOW_USER_FULFILLED, FOLLOW_USER_REJECTED,
         FOLLOW_FACEBOOK_FRIEND, FOLLOW_LIST_FOLLOW_FOLLOWER,
         FOLLOW_ALL_USER_PENDING, FOLLOW_ALL_USER_FULFILLED, FOLLOW_ALL_USER_REJECTED,
         CREATE_FACEBOOK_FRIEND_PENDING, CREATE_FACEBOOK_FRIEND_FULFILLED, CREATE_FACEBOOK_FRIEND_REJECTED,
         LIST_FOLLOW_FOLLOWER_PENDING, LIST_FOLLOW_FOLLOWER_FULFILLED, LIST_FOLLOW_FOLLOWER_REJECTED
} from '../constants/relations'

const INITIAL_STATE = {
	facebook: { pending: false, fulfilled: false, error: null, friends: []}, 
	follow:{ pending: false, fulfilled: false, error: null },
  list_follow_follower: { pending: false, fulfilled: false, error: null, lists: []}
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case LIST_FOLLOW_FOLLOWER_PENDING:
        return { ...state, list_follow_follower: { pending: true, fulfilled: false, error:null } }
    case LIST_FOLLOW_FOLLOWER_FULFILLED:
        return { ...state, list_follow_follower: { pending: false, fulfilled: true, error:null, lists: action.payload.data } }
    case LIST_FOLLOW_FOLLOWER_REJECTED:
        return { ...state, list_follow_follower: { pending: false, fulfilled: false, error:action.payload.response } }
    
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

    case FOLLOW_LIST_FOLLOW_FOLLOWER:
        return { 
            ...state,
            list_follow_follower: { ...state.list_follow_follower, 
                        lists: state.list_follow_follower.lists.map(function(item) {
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
