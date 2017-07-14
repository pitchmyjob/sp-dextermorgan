import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { LIST_FACEBOOK_FRIEND, FOLLOW_USER, ACTIVE_FACEBOOK_FRIEND, FOLLOW_ALL_USER, LIST_RELATION } from './RelationConstants'
import { api }  from '../utils/request'


export const listFacebookFriend = () => {
  return {
      type: LIST_FACEBOOK_FRIEND,
      payload: api.get('relation/facebook-list/')
  }
}

export const followUser = (follow) => {
	return {
      type: FOLLOW_USER,
      payload: api.post('/relation/follow/', {follow})
  }
}

export const followAllUser = () => {
	return {
		type: FOLLOW_ALL_USER,
		payload: api.post('relation/follow/all/')
	}
}


export const activeFacebookFriend = (id) => {
	return {
      type: ACTIVE_FACEBOOK_FRIEND,
      id
  }
}

export const listFollow = (id, search=null) => {
  return {
      type: LIST_RELATION,
      payload: api.get('relation/'+id+'/follows/'+(search ? "?search="+search : ''))
  }
}

export const listFollower = (id, search=null) => {
  return {
      type: LIST_RELATION,
      payload: api.get('relation/'+id+'/followers/'+(search ? "?search="+search : ''))
  }
}