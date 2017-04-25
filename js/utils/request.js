import axios from 'axios'
import {AsyncStorage} from 'React'

import { appAuthToken } from './storage'

const API_ROOT_URL = 'http://163.172.28.221:8000/api/'


const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}


export class Api {

	constructor() {
	  this.instance = axios.create({
		    baseURL: API_ROOT_URL,
		    timeout: 10000,
		    withCredentials: true,
		    headers: HEADERS,
		})

	  // if(token){
	  // 	this.instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
	  // }

	}

	post(url, payload = {} ){
		return appAuthToken.getSessionToken()
			.then((token) => {
		        if(token)
		        	this.instance.defaults.headers.common['Authorization'] = "JWT "+token;
		        return this.instance.post(url, payload)
		     })
	}

	get(url){
		return appAuthToken.getSessionToken()
			.then((token) => {
		        if(token)
		        	this.instance.defaults.headers.common['Authorization'] = "JWT "+token;

		        return this.instance.get(url)
		     })
	}
}

export let api = new Api()