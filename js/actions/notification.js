import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { LIST_NOTIFICATION } from '../constants/notification'
import { api }  from '../utils/request'


export const listNotification = (values) => {
  return {
      type: LIST_NOTIFICATION,
      payload: api.get('notification/')
  } 
}
