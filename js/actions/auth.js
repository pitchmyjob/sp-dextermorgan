import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import jwtDecode from 'jwt-decode';

import { AUTH_REQUESTED, AUTH_SIGNUP_USER, AUTH_USER_NOT_EXISTS, AUTH, AUTH_LOGOUT} from '../constants/auth'
import { USER_FROM_TOKEN } from '../constants/users'

import { api }  from '../utils/request'


export const authUser = (values) => {
  return {
      type: AUTH,
      payload: api.post('/auth/token-auth/', values)
  } 
}

export const authFacebook = (token) => {
  return {
      type: AUTH,
      payload: api.post('/auth/facebook/', {token})
  }
}

export const UserNotExists = (values) => {
    return {
        type: AUTH_USER_NOT_EXISTS,
        payload: api.post('/auth/check/', values)
    }
}

export const authSignupUser = (values, rs) => {
    endpoint = rs ? '/auth/register/'+rs+'/' : '/auth/register/'
    return {
        type: AUTH_SIGNUP_USER,
        payload: api.post(endpoint, values)
    }
}

export const userFromToken = (token) => {
  return {
      type: USER_FROM_TOKEN,
      payload: jwtDecode(token)
  }
}

export const verifAuthFacebook = (values) => {
  return function(dispatch) {
    dispatch(authFacebook(values))
      .then((response) => {
          appAuthToken.storeSessionToken(response.action.payload.data.token) 
          dispatch(userFromToken(response.action.payload.data.token))
          Actions.tabbar({type: "reset"})
      }).catch((error) => {
          Actions.facebookForm({type: ActionConst.REPLACE})
      })
  }
}


export const verifyAccessToken = () => {
  return function (dispatch) {
    appAuthToken.getSessionToken()
      .then((accessToken) => {
        if (!accessToken) {
          dispatch({type:AUTH_REQUESTED})
        } else {
          dispatch(userFromToken(accessToken))
          Actions.tabbar({type: "reset"}) 
        }
      })
  }
}


export const login = (values) => {
  return function(dispatch) {
    dispatch(authUser(values))
    .then((response) => {

          appAuthToken.storeSessionToken(response.action.payload.data.token) 
          dispatch(userFromToken(response.action.payload.data.token))
          Actions.tabbar({type: "reset"})

      }).catch((error) => {
          Alert.alert('Echec de la connexion', "Veuillez vérifier votre nom d'utilisateur et votre email et ressayez.")
      })
  }
}


export const signUp = (values, rs = false) => {
  return function(dispatch) { 
    dispatch(authSignupUser(values, rs))
      .then((response) => {

          appAuthToken.storeSessionToken(response.action.payload.data.token)          
          dispatch(userFromToken(response.action.payload.data.token))
          Actions.friend({type: "reset"})

      }).catch((error) => {
          Alert.alert('Erreur', "Veuillez ressayer")
      })
  }
}

export const authEmailSignUp = (token) => {
  return function(dispatch) { 
      appAuthToken.storeSessionToken(token)          
      dispatch(userFromToken(token))
  }
}



export const logout = () => {
  return function(dispatch){
      appAuthToken.deleteSessionToken()
      dispatch({type:AUTH_LOGOUT})
      Actions.home({type:"reset"})
  }
} 