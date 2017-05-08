import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { CREATE_ASK, LIST_ASK } from '../constants/asks'
import { api }  from '../utils/request'


export const createAsk = (values) => {
  return {
      type: CREATE_ASK,
      payload: api.post('/ask/', values)
  } 
}


export const listAsk = (values) => {
  return {
      type: LIST_ASK,
      payload: api.get('ask/search/')
  } 
}
