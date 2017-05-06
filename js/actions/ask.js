import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { CREATE_ASK } from '../constants/asks'
import { api }  from '../utils/request'


export const createAsk = (values) => {
  return {
      type: CREATE_ASK,
      payload: api.post('/ask/', values)
  } 
}
