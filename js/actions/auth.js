import { appAuthToken } from '../utils/storage'
import { Actions, ActionConst } from 'react-native-router-flux'
import jwtDecode from 'jwt-decode';

import { AUTH_REQUESTED, AUTH_SIGNUP_USER, AUTH_USER_NOT_EXISTS, AUTH } from '../constants/auth'
import { USER_FROM_TOKEN } from '../constants/users'

import request from '../utils/request'
import { handleFormErrors  } from '../utils/forms/formatters'


export const authUser = (values) => {
  return {
      type: AUTH,
      payload: request.post('/auth/token-auth/', values)
  } 
}

export const authFacebook = (values) => {
  let login = {
    'email' : values['email'],
    'login_id' : values['id'],
  }
  return {
      type: AUTH,
      payload: request.post('/auth/facebook/', login)
  }
}

export const UserNotExists = (values) => {
    return {
        type: AUTH_USER_NOT_EXISTS,
        payload: request.post('/auth/check/', values)
    }
}

export const authSignupUser = (values, rs) => {
    endpoint = rs ? '/auth/register/rs/' : '/auth/register/'
    return {
        type: AUTH_SIGNUP_USER,
        payload: request.post(endpoint, values)
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
          console.log('log ')
        }
      })
  }
}


export const login = (values) => {
  return function(dispatch) {
    dispatch(authUser(values))
    .then((response) => {

          dispatch(userFromToken(response.action.payload.data.token))
          Actions.tabbar({type: "reset"})

      }).catch((error) => {
          console.log(error)
      })
  }
}


export const signUp = (values, rs = false) => {
  return function(dispatch) { 
    dispatch(authSignupUser(values, rs))
      .then((response) => {

          dispatch(userFromToken(response.action.payload.data.token))
          Actions.tabbar({type: "reset"})

      }).catch((error) => {
          console.log(error)
      })
  }
} 