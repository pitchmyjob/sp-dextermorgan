import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { LIST_TOP_SPITCHER, LIST_TOP_TAG } from '../constants/search'
import { api }  from '../utils/request'


export const listTopSpitcher = (values) => {
  return {
      type: LIST_TOP_SPITCHER,
      payload: api.get('user/top/spitcher')
  } 
}

export const listTopTag = (values) => {
  return {
      type: LIST_TOP_TAG,
      payload: api.get('trend/tag')
  } 
}