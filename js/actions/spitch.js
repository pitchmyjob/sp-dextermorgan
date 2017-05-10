import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import RNFetchBlob from 'react-native-fetch-blob'

import { INIT_NEW_SPITCH, ADD_NEW_SPITCH } from '../constants/spitch'
import { api, API_ROOT_URL }  from '../utils/request'


export const initNewSpitch = (ask) => {
  return {
      type: INIT_NEW_SPITCH,
      payload: api.post('spitch/init/', {ask})
  } 
}

export const uploadClip = (path, id) => {
	return function(dispatch) {

		dispatch({type:ADD_NEW_SPITCH, clip:path })

		appAuthToken.getSessionToken()
	     	.then((token) => {
	          
	      	 name = Date.now().toString()	
	         RNFetchBlob.fetch('PUT', API_ROOT_URL+'spitch/'+id+'/clip/', {
	              Authorization : "JWT "+token,
	              'Content-Disposition': 'attachment; filename='+name+'.mp4'
	          }, RNFetchBlob.wrap(path))
	          .then((res) => {
	            console.log(res)
	          })
	          .catch((err) => {
	            console.log(err)
	          })
	      })
	}
}