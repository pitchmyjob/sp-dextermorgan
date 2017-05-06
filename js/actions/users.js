import jwtDecode from 'jwt-decode';
import { Actions, ActionConst } from 'react-native-router-flux'

import { USER_FROM_TOKEN, UPDATE_USER, RETREIVE_USER, VISIT_USER } from '../constants/users'
import { appAuthToken } from '../utils/storage'
import { api }  from '../utils/request'


export const retreiveUser = (id) => {
	return {
      type: id == "me"  ? RETREIVE_USER  : VISIT_USER,
      payload: api.get('user/'+id+'/')
  }
}

export const userFromToken = (token) => {
  return {
      type: USER_FROM_TOKEN,
      payload: jwtDecode(token)
  }
}

export const updateUser = (values) => {
  return {
      type: UPDATE_USER,
      payload: api.patch('/auth/me/', values)
  }
}

export const addPhotoUser = (values) => {
	return function(dispatch) {
		dispatch(updateUser(values))
	      .then((response) => {

	          appAuthToken.storeSessionToken(response.action.payload.data.token) 
	          dispatch(userFromToken(response.action.payload.data.token))
	          Actions.friend()

	      }).catch((error) => {
	          console.log('okk')
	      })
	}
}