import { LIST_FACEBOOK_FRIEND, FOLLOW_USER, FOLLOW_ALL_USER, CREATE_FACEBOOK_FRIEND } from '../constants/relations'
import { api }  from '../utils/request'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { userFromToken } from './auth'
import { appAuthToken } from '../utils/storage'

export const listFacebookFriend = () => {
  return {
      type: LIST_FACEBOOK_FRIEND,
      payload: api.get('/relation/facebook-list/')
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


export const createFacebookFriend = (token) => {
  return {
    type: CREATE_FACEBOOK_FRIEND,
    payload: api.post('relation/generate-facebook-list/', {token})
  }
}


export const generateFacebookList = (token) => {

  return function(dispatch) {
    dispatch(createFacebookFriend(token))
    .then((response) => {

        appAuthToken.storeSessionToken(response.action.payload.data.token) 
        dispatch(userFromToken(response.action.payload.data.token))
        Actions.listFriend()

      }).catch((error) => {

          console.log(error)
      })
  }
}

export const followAll = () => {

  return function(dispatch) {
    dispatch(followAllUser())
    .then((response) => {

          dispatch(listFacebookFriend())

      }).catch((error) => {

      		Alert.alert('Echec de la connexion', "Veuillez ressayer.")
      })
  }
}
